import { properties } from '../core/properties';
import { Board, TOTAL_TILES } from './board';
import { successAnimationManager } from './successAnimationManager';
import { stopAnimationManager } from './stopAnimationManager';
import {
	canvasSignal,
	completeAnimationEndedSignal,
	endCycleSignal,
	errorAnimationEndedSignal,
	gameEndedSignal,
	spawnSignal,
	stopAnimationEndedSignal,
	towerRemovedSignal,
} from './signals';
import Block from './Block';
import { SystemManagerState } from '../../types/systemManager';
import math from '../utils/math';
import { logInfo } from '../utils/logger.ts';
import { failAnimation, stateManager as sM, tower } from '../modules.ts';
import { PREVENT_CYCLE_STATES, RESET_CYCLE_RESULTS } from '../core/states.ts';

export const SystemManager = () => {
	const board = Board();
	let firstStartAnimationRatio = 0;
	let blocks: SystemManagerState['blocks'] = [];
	let lastSpawnedBlock: SystemManagerState['lastSpawnedBlock'] = null;
	let cycleIndex: SystemManagerState['cycleIndex'] = 0;
	let animationSpeedRatio: SystemManagerState['animationSpeedRatio'] = 0;
	let previousSuccessBlocksAnimationRatio: SystemManagerState['previousSuccessBlocksAnimationRatio'] = 0;
	let wasSuccess = false;

	function _spawnBlock() {
		const state = sM.getFlags();
		if (_shouldPreventSpawn()) {
			if (properties.errorBlock && properties.errorBlock.isErrorBlock && properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle) {
				if (properties.errorBlock.errorLifeCycle > properties.errorBlockMaxLifeCycle) {
					// only log if it actually exceeded the max
					logInfo(`[spawnBlock] Long block lifecycle(${properties.errorBlock.errorLifeCycle}) exceeded max. Spawning standard block.`);
				}
				_spawnSingleBlock(true);
			}
			return;
		}
		if (state.isSuccessResult || state.isReplayResult) {
			_spawnMultipleBlocks();
		} else {
			_spawnSingleBlock();
		}

		if (blocks.length === properties.maxFreeBlocksCount && state.isFree) return;
		spawnSignal.dispatch();
	}

	function _shouldPreventSpawn() {
		const state = sM.getFlags();
		return state.isFailResult || state.isStopped || blocks.length >= TOTAL_TILES || (board.getMainTile()?.isOccupied && !state.isSuccessResult && !state.isReplayResult);
	}

	function _spawnMultipleBlocks() {
		let blocksToSpawn = TOTAL_TILES - properties.activeBlocksCount;
		if (properties.errorBlock) {
			if (properties.errorBlock.currentTile) {
				properties.errorBlock.currentTile.isOccupied = false;
			}
			blocksToSpawn += 1;
		}
		for (let i = 0; i < blocksToSpawn; i++) {
			const newTile = board.getRandomFreeTile();
			if (newTile) {
				const block = new Block(blocks.length);
				block.currentTile = newTile;
				block.init();
				block.updateTile();
				blocks = [block, ...blocks];
			}
		}
	}

	function _spawnSingleBlock(replaceErrorBlock = false) {
		let block: Block | null | undefined = null;
		const needsErrorBlockReplacement = replaceErrorBlock || Boolean(properties.errorBlock && properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle);
		const canAddNewBlock = Boolean(blocks.length < properties.maxFreeBlocksCount && sM.getFlags().isFree);
		if (!needsErrorBlockReplacement) {
			if (canAddNewBlock) {
				block = new Block(blocks.length);
				lastSpawnedBlock = block;
			}
		} else {
			properties.errorBlock?.reset(true);
			tower.heroBlocks.resetBlockFromLogicBlock(properties.errorBlock);
			block = properties.errorBlock;
			properties.errorBlock = null;
		}
		if (block) {
			block.currentTile = board.getMainTile();

			block.init();
			block.updateTile();
		}
	}

	function _startNewCycle() {
		sM.updateAfterCycle();

		if (PREVENT_CYCLE_STATES.includes(sM.getStatus())) {
			return;
		}
		if (lastSpawnedBlock) {
			blocks = [lastSpawnedBlock, ...blocks];
			lastSpawnedBlock = null;
		}
		properties.activeBlocksCount = blocks.length;
		const state = sM.getFlags();
		if (state.isFailResult || state.isStopped) return;

		blocks.forEach((block) => block.resetAfterCycle());

		endCycleSignal.dispatch();
		cycleIndex++;

		_spawnBlock();
		_calculatePaths();
	}

	function _calculatePaths() {
		if (lastSpawnedBlock?.hasBeenSpawned) {
			lastSpawnedBlock.moveToNextTile(sM.getFlags().isFree, 0);
		}

		const _isFree = cycleIndex % 2 === 0 ? true : properties.activeBlocksCount < properties.maxFreeBlocksCount - 1;

		blocks.forEach((block, index) => {
			if (!block.hasBeenEvaluated && block.hasBeenSpawned) {
				block.moveToNextTile(_isFree, index * 0.2);
			}
		});
	}

	function resetPostDestroy() {
		blocks.forEach((block) => block.reset());
		tower.heroBlocks.reset();
		board.reset();

		blocks = [];
		lastSpawnedBlock = null;
		cycleIndex = 0;
		animationSpeedRatio = 0;
		firstStartAnimationRatio = 0;
	}

	function reset(isDestroy = false) {
		blocks.forEach((block) => block.reset());
		tower.heroBlocks.reset();
		board.reset();

		blocks = [];
		lastSpawnedBlock = null;
		cycleIndex = 0;
		animationSpeedRatio = 0;
		previousSuccessBlocksAnimationRatio = wasSuccess ? 1 : 0;
		wasSuccess = false;
		if (isDestroy) {
			canvasSignal.dispatch();
			firstStartAnimationRatio = 0;
		}
		const result = sM.getResult();
		const needsRestart = result && RESET_CYCLE_RESULTS.includes(result);
		sM.reset();
		_startNewCycle();

		if (needsRestart) {
			sM.setStart();
		}

		completeAnimationEndedSignal.remove(() => {
			sM.setRestart();
			_startNewCycle();
		});
		stopAnimationEndedSignal.remove(() => {
			sM.setRestart();
			reset();
		});
		errorAnimationEndedSignal.remove(() => {
			sM.setRestart();
			_startNewCycle();
		});
		towerRemovedSignal.dispatch();
	}

	function _updateAnimationRatios(dt: number) {
		const _isResult = sM.getFlags().isResult;
		firstStartAnimationRatio = math.saturate(firstStartAnimationRatio + dt * (properties.showVisual ? 1 : 0));
		animationSpeedRatio = Math.min(1, animationSpeedRatio + dt * (_isResult ? 1 : 0));
		previousSuccessBlocksAnimationRatio = math.saturate(previousSuccessBlocksAnimationRatio - dt / 1.5);
	}

	function _checkCycleCompletion() {
		let isCycleComplete = true;
		if (lastSpawnedBlock) {
			isCycleComplete = Boolean(isCycleComplete && lastSpawnedBlock.hasBeenSpawned);
		}

		blocks.forEach((block) => {
			if (block.lifeCycle > 0) {
				isCycleComplete = Boolean(isCycleComplete && block.hasBeenEvaluated && block.hasAnimationEnded);
			} else {
				isCycleComplete = isCycleComplete && block.spawnAnimationRatio === 1;
			}
		});
		const state = sM.getFlags();
		return isCycleComplete || state.isResultAnimation || state.isFailResult || state.isStopped;
	}

	function update(dt: number) {
		_updateAnimationRatios(dt);

		successAnimationManager.update(dt);
		stopAnimationManager.update(dt);
		failAnimation.update(dt);

		const state = sM.getFlags();

		if (state.hasNotStarted) {
			_startNewCycle();
			return;
		}

		if (state.isRestart) {
			wasSuccess = state.isSuccessResult;
			reset();
			return;
		}
		if (state.isResultAnimation) {
			sM.setRestartAnimation();
		}

		board.preUpdate(dt);
		if (lastSpawnedBlock) {
			lastSpawnedBlock.update(dt);
		}
		blocks.forEach((block) => block.update(dt));
		board.update(dt);

		const isCycleComplete = _checkCycleCompletion();

		if (isCycleComplete) {
			_startNewCycle();
		}
	}

	async function init() {
		sM.init();
		successAnimationManager.init();
		stopAnimationManager.init();
		failAnimation.init();
		board.init();

		completeAnimationEndedSignal.add(() => {
			sM.setRestart();
			_startNewCycle();
		});
		stopAnimationEndedSignal.add(() => {
			sM.setRestart();
			reset();
		});
		errorAnimationEndedSignal.add(() => {
			sM.setRestart();
			_startNewCycle();
		});
		gameEndedSignal.addOnce(() => {
			reset(true);
		});
	}

	function getLastSpawnedBlock() {
		return lastSpawnedBlock;
	}
	function getFirstStart() {
		return firstStartAnimationRatio;
	}
	function getBlocks() {
		return blocks;
	}
	function getWinRatio() {
		return previousSuccessBlocksAnimationRatio;
	}

	return {
		init,
		update,
		reset,
		resetPostDestroy,
		getBlocks,
		getLastSpawnedBlock,
		getWinRatio,
		getFirstStart,
		board,
	};
};
