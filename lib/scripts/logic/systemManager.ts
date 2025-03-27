import math from '../utils/math';
import { properties } from '../core/properties';
import { heroBlocks as blocksVisual } from '../visuals/hero/hero';
import { board, mainTile, TOTAL_TILES } from './board';
import Block from './Block';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '../logic/successAnimationManager';
import { SystemManagerState } from '../../types/systemManager';
import { AnimationStatus, PREVENT_CYCLE_STATES, resetCycleResults } from '../../types';
import { setRestart, setStart, stateManagerStore } from '../../store/stateManagerStore';

let firstStartAnimationRatio: SystemManagerState['firstStartAnimationRatio'] = 0;
let blocks: SystemManagerState['blocks'] = [];
let lastSpawnedBlock: SystemManagerState['lastSpawnedBlock'] = null;
let cycleIndex: SystemManagerState['cycleIndex'] = 0;
let animationSpeedRatio: SystemManagerState['animationSpeedRatio'] = 0;
let previousSuccessBlocksAnimationRatio: SystemManagerState['previousSuccessBlocksAnimationRatio'] = 0;

const SystemManager = () => {
    function _spawnBlock() {
        const flags = stateManagerStore.getState().flags;
        const { isFailResult, isStopped, isSuccessResult, isReplayResult, isFree } = flags;
        const preventSpawn =
            isFailResult ||
            isStopped ||
            blocks.length >= TOTAL_TILES ||
            (mainTile?.isOccupied && !isSuccessResult && !isReplayResult);

        if (preventSpawn) return;

        if (isSuccessResult || isReplayResult) {
            _spawnMultipleBlocks();
        } else {
            _spawnSingleBlock();
        }

        if (blocks.length === properties.maxFreeBlocksCount && isFree) return;
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
        const stateStatus = stateManagerStore.getState().status;
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
        const stateStatus = stateManagerStore.getState().status;
        const isFailResult = stateManagerStore.getState().flags.isFailResult;
        const isStopped = stateManagerStore.getState().flags.isStopped;

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
            lastSpawnedBlock.moveToNextTile(stateManagerStore.getState().flags.isFree, 0);
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

        const stateResult = stateManagerStore.getState().result;
        const preventRestartCycle = stateManagerStore.getState().preventRestartCycle;
        const needsRestart = !preventRestartCycle && resetCycleResults.includes(stateResult);
        stateManagerStore.getState().reset();
        _startNewCycle();

        if (needsRestart) {
            setStart();
        }

        if (stateManagerStore.getState().destroyCanvas) {
            firstStartAnimationRatio = 0;
        }
    }

    function _updateAnimationRatios(dt: number) {
        firstStartAnimationRatio = math.saturate(firstStartAnimationRatio + dt * (properties.showVisual ? 1 : 0));

        animationSpeedRatio = Math.min(
            1,
            animationSpeedRatio + dt * (stateManagerStore.getState().flags.isResult ? 1 : 0)
        );
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

        const flags = stateManagerStore.getState().flags;
        const { isStopped, isFailResult, isResultAnimation } = flags;
        return isCycleComplete || isResultAnimation || isFailResult || isStopped;
    }

    function update(dt: number) {
        _updateAnimationRatios(dt);

        successAnimationManager.update(dt);
        stopAnimationManager.update(dt);
        errorAnimationManager.update(dt);

        stateManagerStore.subscribe((state) => {
            const { flags } = state;
            const { hasNotStarted, isRestart, isResultAnimation } = flags;

            if (hasNotStarted) {
                _startNewCycle();
                return;
            }

            if (isRestart) {
                reset();
                return;
            }
            if (isResultAnimation) {
                setRestart();
            }
        });

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
        stateManagerStore.subscribe((state, prevState) => {
            if (state.status !== prevState.status || state.result !== prevState.result) {
                state.updateFlags();
            }

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
        successAnimationManager.init();
        stopAnimationManager.init();
        errorAnimationManager.init();
        board.init();
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
