import math from '@utils/math';
import { properties } from '@core/properties';
import { heroBlocks as blocksVisual } from '@visuals/hero/hero';

import {
	hasNotStarted,
	isFailResult,
	isFree,
	isReplayResult,
	isRestart,
	isResult,
	isResultAnimation,
	isStopped,
	isSuccessResult,
	PREVENT_CYCLE_STATES,
	resetCycleResults,
	result,
	stateManager,
	status,
} from './stateManager';
import { board, mainTile, TOTAL_TILES } from './board';
import Block from './Block';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '@logic/successAnimationManager.ts';
import { completeAnimationEndedSignal, endCycleSignal, errorAnimationEndedSignal, spawnSignal, stopAnimationEndedSignal } from '@logic/signals.ts';
import { SystemManagerState } from '../../types/systemManager';

let firstStartAnimationRatio: SystemManagerState['firstStartAnimationRatio'] = 0;
let blocks: SystemManagerState['blocks'] = [];
let lastSpawnedBlock: SystemManagerState['lastSpawnedBlock'] = null;
let cycleIndex: SystemManagerState['cycleIndex'] = 0;
let animationSpeedRatio: SystemManagerState['animationSpeedRatio'] = 0;
let previousSuccessBlocksAnimationRatio: SystemManagerState['previousSuccessBlocksAnimationRatio'] = 0;

const SystemManager = () => {
	function _spawnBlock() {
		if (_shouldPreventSpawn()) return;
		if (isSuccessResult || isReplayResult) {
			_spawnMultipleBlocks();
		} else {
			_spawnSingleBlock();
		}

		if (blocks.length === properties.maxFreeBlocksCount && isFree) return;
		spawnSignal.dispatch();
	}

	function _shouldPreventSpawn() {
		return isFailResult || result === 'failed' || isStopped || blocks.length >= TOTAL_TILES || (mainTile?.isOccupied && !isSuccessResult && !isReplayResult);
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

	function _spawnSingleBlock() {
		let block: Block | null | undefined = null;

		const needsErrorBlockReplacement = Boolean(properties.errorBlock && properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle);
		const canAddNewBlock = Boolean(blocks.length < properties.maxFreeBlocksCount && isFree);
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
		stateManager.updateAfterCycle();
		if (PREVENT_CYCLE_STATES.includes(status)) return;

		if (lastSpawnedBlock) {
			blocks = [lastSpawnedBlock, ...blocks];
			lastSpawnedBlock = null;
		}
		properties.activeBlocksCount = blocks.length;

		if (isFailResult || isStopped) return;

		blocks.forEach((block) => block.resetAfterCycle());

		endCycleSignal.dispatch();
		cycleIndex++;

		_spawnBlock();
		_calculatePaths();
	}

	function _calculatePaths() {
		if (lastSpawnedBlock?.hasBeenSpawned) {
			lastSpawnedBlock.moveToNextTile(isFree, 0);
		}

		const _isFree = cycleIndex % 2 === 0 ? true : properties.activeBlocksCount < properties.maxFreeBlocksCount - 1;

		blocks.forEach((block, index) => {
			if (!block.hasBeenEvaluated && block.hasBeenSpawned) {
				block.moveToNextTile(_isFree, index * 0.2);
			}
		});
	}

	function reset() {
		blocks.forEach((block) => block.reset());
		blocksVisual.reset();
		board.reset();

		blocks = [];
		lastSpawnedBlock = null;
		cycleIndex = 0;

		animationSpeedRatio = 0;

		const needsRestart = resetCycleResults.includes(result);
		stateManager.reset();
		_startNewCycle();

		if (needsRestart) {
			stateManager.setStart();
		}

		completeAnimationEndedSignal.remove(() => {
			stateManager.setRestart();
			_startNewCycle();
			previousSuccessBlocksAnimationRatio = 1;
		});
		stopAnimationEndedSignal.remove(() => {
			stateManager.setRestart();
			reset();
		});
		errorAnimationEndedSignal.remove(() => {
			stateManager.setRestart();
			_startNewCycle();
		});
	}

	function _updateAnimationRatios(dt: number) {
		const _isResult = isResult;
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

		return isCycleComplete || isResultAnimation || isFailResult || isStopped;
	}

	function update(dt: number) {
		_updateAnimationRatios(dt);

		successAnimationManager.update(dt);
		stopAnimationManager.update(dt);
		errorAnimationManager.update(dt);

		if (hasNotStarted) {
			_startNewCycle();
			return;
		}

		if (isRestart) {
			reset();
			return;
		}

		if (isResultAnimation) {
			stateManager.setRestartAnimation();
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

	function init() {
		stateManager.init();
		successAnimationManager.init();
		stopAnimationManager.init();
		errorAnimationManager.init();
		board.init();

		completeAnimationEndedSignal.add(() => {
			stateManager.setRestart();
			_startNewCycle();
			previousSuccessBlocksAnimationRatio = 1;
		});
		stopAnimationEndedSignal.add(() => {
			stateManager.setRestart();
			reset();
		});
		errorAnimationEndedSignal.add(() => {
			stateManager.setRestart();
			_startNewCycle();
		});
	}

	return {
		init,
		update,
		reset,
	};
};
const game = SystemManager();
export default game;
export { firstStartAnimationRatio, blocks, lastSpawnedBlock, previousSuccessBlocksAnimationRatio };
