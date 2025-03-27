import math from '../utils/math';
import { properties } from '../core/properties';
import { heroBlocks as blocksVisual } from '../visuals/hero/hero';
import {
    PREVENT_CYCLE_STATES,
    resetCycleResults,
    stateManager as sM,
    isSuccessResult,
    isReplayResult,
    isFree,
    isFailResult,
    isStopped,
    isResult,
    isResultAnimation,
    isRestart,
    hasNotStarted,
} from './stateManager';
import { board, mainTile, TOTAL_TILES } from './board';
import Block from './Block';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '../logic/successAnimationManager';
import { SystemManagerState } from '../../types/systemManager';
import { AnimationStatus } from '../../types';
import { managerStore } from '../../store/store.ts';

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
    }

    function _shouldPreventSpawn() {
        return (
            isFailResult ||
            isStopped ||
            blocks.length >= TOTAL_TILES ||
            (mainTile?.isOccupied && !isSuccessResult && !isReplayResult)
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

    function _spawnSingleBlock() {
        let block: Block | null | undefined = null;
        const stateStatus = managerStore.getState().status;
        const needsErrorBlockReplacement = Boolean(
            properties.errorBlock && properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle
        );
        const canAddNewBlock = Boolean(
            blocks.length < properties.maxFreeBlocksCount && stateStatus === AnimationStatus.FREE
        );
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
        const stateStatus = managerStore.getState().status;
        if (PREVENT_CYCLE_STATES.includes(stateStatus)) return;
        if (lastSpawnedBlock) {
            blocks = [lastSpawnedBlock, ...blocks];
            lastSpawnedBlock = null;
        }
        properties.activeBlocksCount = blocks.length;
        if (isFailResult || isStopped) return;

        blocks.forEach((block) => block.resetAfterCycle());

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

    function reset() {
        blocks.forEach((block) => block.reset());
        blocksVisual.reset();
        board.reset();

        blocks = [];
        lastSpawnedBlock = null;
        cycleIndex = 0;
        animationSpeedRatio = 0;

        const stateResult = managerStore.getState().result;
        const preventRestartCycle = managerStore.getState().preventRestartCycle;
        const needsRestart = !preventRestartCycle && resetCycleResults.includes(stateResult);
        sM.reset();
        _startNewCycle();

        if (needsRestart) {
            sM.setStart();
        }

        if (managerStore.getState().destroyCanvas) {
            firstStartAnimationRatio = 0;
        }
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

        managerStore.subscribe((state) => {
            if (state.animationTypeEnded) {
                switch (state.animationTypeEnded) {
                    case 'win': {
                        previousSuccessBlocksAnimationRatio = 1;
                        _startNewCycle();
                        break;
                    }
                    case 'lose': {
                        _startNewCycle();
                        break;
                    }
                    case 'stop':
                    default: {
                        reset();
                        break;
                    }
                }

                state.setAnimationTypeEnded(null);
            }
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
