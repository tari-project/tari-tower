import math from '../utils/math';
import { heroBlocks } from '../visuals/hero/hero';
import { board, mainTile, TOTAL_TILES } from './board';
import Block from './Block';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '../logic/successAnimationManager';

import { resetCycleResults } from '../../types/stateManager';
import { setStart, stateManagerStore } from '../../store/stateManagerStore';

import { addBlock, animationCycleStore, setAnimationRatios, setLastSpawnedBlock } from '../../store/animationCycleStore.ts';
import { MAX_FREE_BLOCKS_COUNT } from '../core/settings.ts';
import { propertiesStore } from '../../store/propertiesStore.ts';

const SystemManager = () => {
    let flagsState = stateManagerStore.getState().flags;
    const animationCycleStoreInitial = animationCycleStore.getState();
    let { blocks: blocksState, ...animationCycleState } = animationCycleStoreInitial;
    function _spawnBlock() {
        const { isFailResult, isStopped, isSuccessResult, isReplayResult, isFree } = flagsState;
        const preventSpawn = isFailResult || isStopped || blocksState.length >= TOTAL_TILES || (mainTile?.isOccupied && !isSuccessResult && !isReplayResult);
        if (preventSpawn) return;

        if (isSuccessResult || isReplayResult) {
            _spawnMultipleBlocks();
        } else {
            _spawnSingleBlock();
        }
        if (blocksState.length === MAX_FREE_BLOCKS_COUNT && isFree) return;
    }

    function _spawnMultipleBlocks() {
        const activeBlocksCount = blocksState?.length ?? 0;
        const blocksToSpawn = TOTAL_TILES - activeBlocksCount;

        for (let i = 0; i < blocksToSpawn; i++) {
            const newTile = board.getRandomFreeTile();
            if (newTile) {
                const block = new Block(blocksState.length, newTile);
                block.currentTile = newTile;
                block.init();
                block.updateTile();
                addBlock(block);
            }
        }
    }

    function _spawnSingleBlock() {
        const isFree = flagsState.isFree;
        const canAddNewBlock = Boolean(blocksState.length < MAX_FREE_BLOCKS_COUNT && isFree);
        if (canAddNewBlock) {
            const block = new Block(blocksState.length, mainTile);
            if (block) {
                console.debug(`block=`, block);
            }
            block.currentTile = mainTile;
            block.init();
            block.updateTile();
            setLastSpawnedBlock(block);
        }
    }

    function _startNewCycle() {
        const notStarted = flagsState.hasNotStarted;
        const isFailResult = flagsState.isFailResult;
        const isStopped = flagsState.isStopped;

        if (notStarted) return;

        if (animationCycleState.lastSpawnedBlock) {
            console.debug('addBlock from _startNewCycle', animationCycleState.lastSpawnedBlock);
            addBlock(animationCycleState.lastSpawnedBlock);
            console.debug('setLastSpawnedBlock to NULL from _startNewCycle');
            setLastSpawnedBlock(null);
        }
        if (isFailResult || isStopped) return;

        blocksState.forEach((block) => block.resetAfterCycle());
        animationCycleStore.getState().incCycleIndex();

        _spawnBlock();
        _calculatePaths();
    }

    function _calculatePaths() {
        const cycleIndex = animationCycleState.cycleIndex;
        const activeBlocksCount = blocksState?.length ?? 0;

        const _isFree = cycleIndex % 2 === 0 ? true : activeBlocksCount < MAX_FREE_BLOCKS_COUNT - 1;

        if (animationCycleState.lastSpawnedBlock?.hasBeenSpawned) {
            animationCycleState.lastSpawnedBlock.moveToNextTile(_isFree, 0);
        }

        blocksState.forEach((block, index) => {
            if (!block.hasBeenEvaluated && block.hasBeenSpawned) {
                block.moveToNextTile(_isFree, index * 0.2);
            }
        });
    }

    function reset(preventRestart = false) {
        blocksState.forEach((block) => block.reset());
        heroBlocks.reset();
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
        const isResult = flagsState.isResult;
        const speedRatio = animationCycleState.animationSpeedRatio;
        const firstStartRatio = animationCycleState.firstStartAnimationRatio;
        const prevSuccessRatio = animationCycleState.previousSuccessBlocksAnimationRatio;

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
        if (animationCycleState.lastSpawnedBlock) {
            isCycleComplete = !!animationCycleState.lastSpawnedBlock?.hasBeenSpawned;
        }

        blocksState.forEach((block) => {
            if (block.lifeCycle > 0) {
                isCycleComplete = Boolean(block.hasBeenEvaluated && block.hasAnimationEnded);
            } else {
                isCycleComplete = block.spawnAnimationRatio === 1;
            }
        });

        const { isStopped, isFailResult, isResult } = flagsState;
        return isCycleComplete || isResult || isFailResult || isStopped;
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
        if (animationCycleState.lastSpawnedBlock) {
            animationCycleState.lastSpawnedBlock.update(dt);
        }
        blocksState.forEach((block) => block.update(dt));
        board.update(dt);

        const isCycleComplete = _checkCycleCompletion();

        if (isCycleComplete) {
            _startNewCycle();
        }
    }

    async function init() {
        const stateListener: Parameters<typeof stateManagerStore.subscribe>[0] = ({ flags, animationTypeEnded }) => {
            flagsState = flags;
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
        };
        const animationCycleListener: Parameters<typeof animationCycleStore.subscribe>[0] = ({ blocks, ...rest }) => {
            blocksState = blocks;
            animationCycleState = rest;
        };

        stateManagerStore.subscribe((state) => stateListener(state));
        animationCycleStore.subscribe((state) => animationCycleListener(state));

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
