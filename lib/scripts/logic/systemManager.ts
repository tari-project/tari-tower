import math from '../utils/math';
import { properties } from '../core/properties';
import { heroBlocks as blocksVisual } from '../visuals/hero/hero';
import { board, mainTile, TOTAL_TILES } from './board';
import Block from './Block';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '../logic/successAnimationManager';

import { PREVENT_CYCLE_STATES, resetCycleResults } from '../../types/stateManager';
import { setRestart, setStart, stateManagerStore, updateFlags } from '../../store/stateManagerStore';

import {
    addBlock,
    animationCycleStore,
    setAnimationRatios,
    setLastSpawnedBlock,
} from '../../store/animationCycleStore.ts';

const SystemManager = () => {
    let lastSpawnedBlock = animationCycleStore.getState().lastSpawnedBlock;
    let blocks = animationCycleStore.getState().blocks;

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
        const activeBlocksCount = blocks?.length;
        let blocksToSpawn = TOTAL_TILES - activeBlocksCount;
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
                addBlock(block);
            }
        }
    }

    function _spawnSingleBlock() {
        let block: Block | null | undefined = null;
        const isFree = stateManagerStore.getState().flags.isFree;
        const needsErrorBlockReplacement = Boolean(
            properties.errorBlock && properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle
        );
        const canAddNewBlock = Boolean(blocks.length < properties.maxFreeBlocksCount && isFree);
        if (!needsErrorBlockReplacement) {
            if (canAddNewBlock) {
                block = new Block(blocks.length);
                setLastSpawnedBlock(block);
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
            addBlock(lastSpawnedBlock);
            setLastSpawnedBlock(null);
        }

        if (isFailResult || isStopped) return;

        blocks.forEach((block) => block.resetAfterCycle());

        animationCycleStore.getState().incCycleIndex();

        _spawnBlock();
        _calculatePaths();
    }

    function _calculatePaths() {
        const cycleIndex = animationCycleStore.getState().cycleIndex;
        const activeBlocksCount = animationCycleStore.getState().blocks?.length;
        const isFree = stateManagerStore.getState().flags.isFree;
        if (lastSpawnedBlock?.hasBeenSpawned) {
            lastSpawnedBlock.moveToNextTile(isFree, 0);
        }

        const _isFree = cycleIndex % 2 === 0 ? true : activeBlocksCount < properties.maxFreeBlocksCount - 1;

        blocks.forEach((block, index) => {
            if (!block.hasBeenEvaluated && block.hasBeenSpawned) {
                block.moveToNextTile(_isFree, index * 0.2);
            }
        });
    }

    function reset(preventRestart = false) {
        blocks.forEach((block) => block.reset());
        blocksVisual.reset();
        board.reset();
        animationCycleStore.getState().reset();

        const stateResult = stateManagerStore.getState().result;
        const needsRestart = resetCycleResults.includes(stateResult);
        stateManagerStore.getState().reset();
        _startNewCycle();

        if (!preventRestart && needsRestart) {
            setStart();
        }
    }

    function _updateAnimationRatios(dt: number) {
        const isResult = stateManagerStore.getState().flags.isResult;
        const speedRatio = animationCycleStore.getState().animationSpeedRatio;
        const firstStartRatio = animationCycleStore.getState().firstStartAnimationRatio;
        const prevSuccessRatio = animationCycleStore.getState().previousSuccessBlocksAnimationRatio;

        const animationSpeedRatio = Math.min(1, speedRatio + dt * (isResult ? 1 : 0));

        const previousSuccessBlocksAnimationRatio = math.saturate(prevSuccessRatio - dt / 1.5);
        const firstStartAnimationRatio = math.saturate(firstStartRatio + dt * (properties.showVisual ? 1 : 0));

        setAnimationRatios({
            animationSpeedRatio,
            firstStartAnimationRatio,
            previousSuccessBlocksAnimationRatio,
        });
    }

    function _checkCycleCompletion() {
        let isCycleComplete = true;
        if (lastSpawnedBlock) {
            isCycleComplete = !!lastSpawnedBlock?.hasBeenSpawned;
        }

        blocks.forEach((block) => {
            if (block.lifeCycle > 0) {
                isCycleComplete = Boolean(block.hasBeenEvaluated && block.hasAnimationEnded);
            } else {
                isCycleComplete = block.spawnAnimationRatio === 1;
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

        stateManagerStore.subscribe(
            (state) => state.flags,
            (flags) => {
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
            },
            { fireImmediately: true }
        );

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
        animationCycleStore.subscribe(
            (state) => state.lastSpawnedBlock,
            (_lastSpawnedBlock) => (lastSpawnedBlock = _lastSpawnedBlock),
            { fireImmediately: true }
        );
        animationCycleStore.subscribe(
            (state) => state.blocks,
            (_blocks) => (blocks = _blocks),
            { fireImmediately: true }
        );
        stateManagerStore.subscribe(
            (state) => state.status,
            (status, prevStatus) => {
                if (status !== prevStatus) {
                    updateFlags();
                }
            },
            { fireImmediately: true }
        );

        successAnimationManager.init();
        stopAnimationManager.init();
        errorAnimationManager.init();
        board.init();

        stateManagerStore.subscribe(
            (state) => state.animationTypeEnded,
            (animationTypeEnded) => {
                if (animationTypeEnded) {
                    switch (animationTypeEnded) {
                        case 'win': {
                            reset();
                            setAnimationRatios({ previousSuccessBlocksAnimationRatio: 1 });
                            _startNewCycle();
                            break;
                        }
                        case 'lose': {
                            reset();
                            _startNewCycle();
                            break;
                        }
                        case 'stop':
                        default:
                            reset(true);
                            break;
                    }
                }
            },
            { fireImmediately: true }
        );
    }

    return {
        init,
        update,
        reset,
    };
};
const game = SystemManager();
export default game;
