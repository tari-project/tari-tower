import math from '../utils/math';
import { heroBlocks } from '../visuals/hero/hero';
import { board, mainTile, TOTAL_TILES } from './board';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '../logic/successAnimationManager';

import { PREVENT_CYCLE_STATES, resetCycleResults } from '../../types/stateManager';
import { setStart, stateManagerStore, updateAfterCycle } from '../../store/stateManagerStore';

import { addBlock, animationCycleStore, setAnimationRatios, setLastSpawnedBlock } from '../../store/animationCycleStore.ts';
import { MAX_FREE_BLOCKS_COUNT } from '../core/settings.ts';
import { propertiesStore } from '../../store/propertiesStore.ts';

import Block from './Block.ts';

const SystemManager = () => {
    let flagsState = stateManagerStore.getState().flags;
    let cycle = animationCycleStore.getState();

    function _shouldPreventSpawn() {
        return (
            flagsState.isFailResult ||
            flagsState.isStopped ||
            cycle.blocks.length >= TOTAL_TILES ||
            (mainTile && mainTile.isOccupied && !flagsState.isSuccessResult && !flagsState.isReplayResult)
        );
    }

    function _spawnBlock() {
        if (_shouldPreventSpawn()) return;
        if (flagsState.isSuccessResult || flagsState.isReplayResult) {
            _spawnMultipleBlocks();
        } else {
            _spawnSingleBlock();
        }
    }

    function _spawnMultipleBlocks() {
        const activeBlocksCount = cycle.blocks?.length;
        const blocksToSpawn = TOTAL_TILES - activeBlocksCount;
        for (let i = 0; i < blocksToSpawn; i++) {
            const newTile = board.getRandomFreeTile();
            if (newTile) {
                const block = new Block(cycle.blocks.length);
                block.currentTile = newTile;
                block.init();
                block.updateTile();

                addBlock(block);
            }
        }
    }

    function _spawnSingleBlock() {
        let block;
        const isFree = flagsState.isFree;
        const canAddNewBlock = Boolean(cycle.blocks.length < MAX_FREE_BLOCKS_COUNT && isFree);

        if (canAddNewBlock) {
            block = new Block(cycle.blocks.length);
            setLastSpawnedBlock(block);
        }
        if (block) {
            block.currentTile = mainTile;
            block.init();
            block.updateTile();
        }
    }

    function _startNewCycle() {
        updateAfterCycle();
        const status = stateManagerStore.getState().status;
        if (PREVENT_CYCLE_STATES.includes(status)) {
            return;
        }

        if (cycle.lastSpawnedBlock) {
            addBlock(cycle.lastSpawnedBlock);
            setLastSpawnedBlock(null);
        }

        if (flagsState.isFailResult || flagsState.isStopped) return;

        if (cycle.blocks?.length) {
            cycle.blocks.forEach((block) => block.resetAfterCycle());
        }
        cycle.incCycleIndex();

        _spawnBlock();
        _calculatePaths();
    }

    function _calculatePaths() {
        const cycleIndex = cycle.cycleIndex;
        const activeBlocksCount = cycle.blocks.length;

        if (cycle.lastSpawnedBlock?.hasBeenSpawned) {
            cycle.lastSpawnedBlock.moveToNextTile(flagsState.isFree, 0);
        }
        const _isFree = cycleIndex % 2 === 0 ? true : activeBlocksCount < MAX_FREE_BLOCKS_COUNT - 1;

        cycle.blocks.forEach((block, index) => {
            if (!block.hasBeenEvaluated && block.hasBeenSpawned) {
                block.moveToNextTile(_isFree, index * 0.2);
            }
        });
    }

    function reset(preventRestart = false) {
        heroBlocks.reset();
        board.reset();
        cycle.blocks.forEach((b) => b.reset());
        cycle.reset();

        const stateResult = stateManagerStore.getState().result;
        const needsRestart = resetCycleResults.includes(stateResult);
        stateManagerStore.getState().reset();
        _startNewCycle();

        if (!preventRestart && needsRestart) {
            setStart();
        }
    }

    function _updateAnimationRatios(dt: number) {
        const isResult = flagsState.isResult;
        const speedRatio = cycle.animationSpeedRatio;
        const firstStartRatio = cycle.firstStartAnimationRatio;
        const prevSuccessRatio = cycle.previousSuccessBlocksAnimationRatio;

        const animationSpeedRatio = Math.min(1, speedRatio + dt * (isResult ? 1 : 0));

        const previousSuccessBlocksAnimationRatio = math.saturate(prevSuccessRatio - dt / 1.5);
        const firstStartAnimationRatio = math.saturate(firstStartRatio + dt * (propertiesStore.getState().showVisual ? 1 : 0));

        setAnimationRatios({
            animationSpeedRatio,
            firstStartAnimationRatio,
            previousSuccessBlocksAnimationRatio,
        });
    }

    function _checkCycleCompletion() {
        let isCycleComplete = true;
        if (cycle.lastSpawnedBlock) {
            isCycleComplete = isCycleComplete && !!cycle.lastSpawnedBlock.hasBeenSpawned;
        }
        cycle.blocks.forEach((block) => {
            if (block.lifeCycle > 0) {
                isCycleComplete = isCycleComplete && !!block.hasBeenEvaluated && !!block.hasAnimationEnded;
            } else {
                isCycleComplete = isCycleComplete && block.spawnAnimationRatio === 1;
            }
        });
        const { isStopped, isFailResult, isResultAnimation } = flagsState;
        return isCycleComplete || isResultAnimation || isFailResult || isStopped;
    }

    function update(dt: number) {
        _updateAnimationRatios(dt);

        successAnimationManager.update(dt);
        stopAnimationManager.update(dt);
        errorAnimationManager.update(dt);

        if (flagsState.hasNotStarted) {
            _startNewCycle();
            return;
        }

        board.preUpdate(dt);
        cycle.lastSpawnedBlock?.update(dt);
        cycle.blocks.forEach((block) => block.update(dt));

        board.update(dt);

        const isCycleComplete = _checkCycleCompletion();
        if (isCycleComplete) {
            _startNewCycle();
        }
    }

    async function init() {
        const animationCycleListener: Parameters<typeof animationCycleStore.subscribe>[0] = (s) => (cycle = s);
        stateManagerStore.subscribe(
            (s) => s.flags,
            (flags) => (flagsState = flags),
            { fireImmediately: true }
        );

        stateManagerStore.subscribe(
            (s) => s.animationTypeEnded,
            (animationTypeEnded) => {
                if (animationTypeEnded) {
                    console.debug(`animationTypeEnded=`, animationTypeEnded);
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

        animationCycleStore.subscribe((s) => s, animationCycleListener, { fireImmediately: true });

        successAnimationManager.init();
        stopAnimationManager.init();
        errorAnimationManager.init();
        board.init();
    }

    return {
        init,
        update,
        reset,
    };
};
const game = SystemManager();
export default game;
