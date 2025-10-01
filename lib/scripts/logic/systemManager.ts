import { properties } from '../core/properties';
import { Board, mainTile, TOTAL_TILES } from './board';
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
		if (sM.stateFlags.isSuccessResult || sM.stateFlags.isReplayResult) {
			_spawnMultipleBlocks();
		} else {
			_spawnSingleBlock();
		}

		if (blocks.length === properties.maxFreeBlocksCount && sM.stateFlags.isFree) return;
		spawnSignal.dispatch();
	}

	function _shouldPreventSpawn() {
		return (
			sM.stateFlags.isFailResult ||
			sM.stateFlags.isStopped ||
			blocks.length >= TOTAL_TILES ||
			(mainTile?.isOccupied && !sM.stateFlags.isSuccessResult && !sM.stateFlags.isReplayResult)
		);
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
		const canAddNewBlock = Boolean(blocks.length < properties.maxFreeBlocksCount && sM.stateFlags.isFree);
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
			block.currentTile = mainTile;

			block.init();
			block.updateTile();
		}
	}

	function _startNewCycle() {
		sM.updateAfterCycle();

		if (PREVENT_CYCLE_STATES.includes(sM.status)) {
			return;
		}
		if (lastSpawnedBlock) {
			blocks = [lastSpawnedBlock, ...blocks];
			lastSpawnedBlock = null;
		}
		properties.activeBlocksCount = blocks.length;
		if (sM.stateFlags.isFailResult || sM.stateFlags.isStopped) return;

		blocks.forEach((block) => block.resetAfterCycle());

		endCycleSignal.dispatch();
		cycleIndex++;

		_spawnBlock();
		_calculatePaths();
	}

	function _calculatePaths() {
		if (lastSpawnedBlock?.hasBeenSpawned) {
			lastSpawnedBlock.moveToNextTile(sM.stateFlags.isFree, 0);
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

		const needsRestart = sM.result && RESET_CYCLE_RESULTS.includes(sM.result);
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
		const _isResult = sM.stateFlags.isResult;
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

		return isCycleComplete || sM.stateFlags.isResultAnimation || sM.stateFlags.isFailResult || sM.stateFlags.isStopped;
	}

	function update(dt: number) {
		_updateAnimationRatios(dt);

		successAnimationManager.update(dt);
		stopAnimationManager.update(dt);
		failAnimation.update(dt);

		if (sM.stateFlags.hasNotStarted) {
			_startNewCycle();
			return;
		}

		if (sM.stateFlags.isRestart) {
			wasSuccess = sM.stateFlags.isSuccessResult;
			reset();
			return;
		}
		if (sM.stateFlags.isResultAnimation) {
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

	function _getLastSpawnedBlock() {
		return lastSpawnedBlock;
	}
	function getFirstStart() {
		return firstStartAnimationRatio;
	}

	return {
		init,
		update,
		reset,
		resetPostDestroy,
		blocks,
		board,
		lastSpawnedBlock: _getLastSpawnedBlock(),
		previousSuccessBlocksAnimationRatio,
		getFirstStart,
	};
};
