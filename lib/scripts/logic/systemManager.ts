import { properties } from '../core/properties';
import { PREVENT_CYCLE_STATES, resetCycleResults, result as stateResult, stateFlags, stateManager as sM, status as stateStatus } from './stateManager';
import { board, mainTile, TOTAL_TILES } from './board';
import { errorAnimationManager } from './errorAnimationManager';
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
import { AnimationResult, AnimationStatus } from '../../types';
import { heroBlocks as blocksVisual } from '../visuals/hero/hero';
import math from '../utils/math';
import { logWarn } from '../utils/logger.ts';

let firstStartAnimationRatio: SystemManagerState['firstStartAnimationRatio'] = 0;
let blocks: SystemManagerState['blocks'] = [];
let lastSpawnedBlock: SystemManagerState['lastSpawnedBlock'] = null;
let cycleIndex: SystemManagerState['cycleIndex'] = 0;
let animationSpeedRatio: SystemManagerState['animationSpeedRatio'] = 0;
let previousSuccessBlocksAnimationRatio: SystemManagerState['previousSuccessBlocksAnimationRatio'] = 0;
let wasSuccess = false;
const SystemManager = () => {
	function _spawnBlock() {
		if (_shouldPreventSpawn()) {
			if (properties.errorBlock && properties.errorBlock.isErrorBlock && properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle) {
				logWarn(`Long block lifecycle (${properties.errorBlock.errorLifeCycle}) exceeded max, resetting in spawn`);
				_spawnSingleBlock(true);
			}
			return;
		}
		if (stateFlags.isSuccessResult || stateFlags.isReplayResult) {
			_spawnMultipleBlocks();
		} else {
			_spawnSingleBlock();
		}

		if (blocks.length === properties.maxFreeBlocksCount && stateFlags.isFree) return;
		spawnSignal.dispatch();
	}

	function _shouldPreventSpawn() {
		return (
			stateFlags.isFailResult || stateFlags.isStopped || blocks.length >= TOTAL_TILES || (mainTile?.isOccupied && !stateFlags.isSuccessResult && !stateFlags.isReplayResult)
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
		const canAddNewBlock = Boolean(blocks.length < properties.maxFreeBlocksCount && stateStatus === AnimationStatus.FREE);
		if (!needsErrorBlockReplacement) {
			if (canAddNewBlock) {
				block = new Block(blocks.length);
				lastSpawnedBlock = block;
			}
		} else {
			properties.errorBlock?.reset(true);
			blocksVisual.resetBlockFromLogicBlock(properties.errorBlock);
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

		if (PREVENT_CYCLE_STATES.includes(stateStatus)) {
			return;
		}
		if (lastSpawnedBlock) {
			blocks = [lastSpawnedBlock, ...blocks];
			lastSpawnedBlock = null;
		}
		properties.activeBlocksCount = blocks.length;
		if (stateFlags.isFailResult || stateFlags.isStopped) return;

		blocks.forEach((block) => block.resetAfterCycle());

		endCycleSignal.dispatch();
		cycleIndex++;

		_spawnBlock();
		_calculatePaths();
	}

	function _calculatePaths() {
		if (lastSpawnedBlock?.hasBeenSpawned) {
			lastSpawnedBlock.moveToNextTile(stateFlags.isFree, 0);
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
		blocksVisual.reset();
		board.reset();

		blocks = [];
		lastSpawnedBlock = null;
		cycleIndex = 0;
		animationSpeedRatio = 0;
		firstStartAnimationRatio = 0;
	}

	function reset(isDestroy = false) {
		blocks.forEach((block) => block.reset());
		blocksVisual.reset();
		board.reset();

		blocks = [];
		lastSpawnedBlock = null;
		cycleIndex = 0;
		animationSpeedRatio = 0;
		previousSuccessBlocksAnimationRatio = wasSuccess ? 1 : 0;
		if (isDestroy) {
			canvasSignal.dispatch();
			firstStartAnimationRatio = 0;
		}

		const needsRestart = resetCycleResults.includes(stateResult);
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
		const _isResult = stateFlags.isResult;
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

		return isCycleComplete || stateFlags.isResultAnimation || stateFlags.isFailResult || stateFlags.isStopped;
	}

	function update(dt: number) {
		_updateAnimationRatios(dt);

		successAnimationManager.update(dt);
		stopAnimationManager.update(dt);
		errorAnimationManager.update(dt);

		if (stateFlags.hasNotStarted) {
			_startNewCycle();
			return;
		}

		if (stateFlags.isRestart) {
			wasSuccess = stateResult === AnimationResult.COMPLETED;
			reset();
			return;
		}
		if (stateFlags.isResultAnimation) {
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
		errorAnimationManager.init();
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

	return {
		init,
		update,
		reset,
		resetPostDestroy,
	};
};
const game = SystemManager();
export default game;

export { firstStartAnimationRatio, blocks, lastSpawnedBlock, previousSuccessBlocksAnimationRatio };
