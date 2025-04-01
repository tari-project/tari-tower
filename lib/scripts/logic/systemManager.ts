import math from '../utils/math';
import { heroBlocks } from '../visuals/hero/hero';
import { board, mainTile, TOTAL_TILES } from './board';
import Block from './Block';

import { stopAnimationManager } from './stopAnimationManager';
import { errorAnimationManager } from './errorAnimationManager';
import { successAnimationManager } from '../logic/successAnimationManager';

import { resetCycleResults } from '../../types/stateManager';
import { setStart, stateManagerStore } from '../../store/stateManagerStore';

import {
    addBlock,
    animationCycleStore,
    setAnimationRatios,
    setLastSpawnedBlock,
} from '../../store/animationCycleStore.ts';
import { MAX_FREE_BLOCKS_COUNT } from '../core/settings.ts';
import { propertiesStore } from '../../store/propertiesStore.ts';

const SystemManager = () => {
    const animationCycleState = animationCycleStore.getState();
    const flags = stateManagerStore.getState().flags;

    function _spawnBlock() {
        const { isFailResult, isStopped, isSuccessResult, isReplayResult, isFree } = flags;
        const preventSpawn =
            isFailResult ||
            isStopped ||
            animationCycleState.blocks.length >= TOTAL_TILES ||
            (mainTile?.isOccupied && !isSuccessResult && !isReplayResult);
        if (preventSpawn) return;

        if (isSuccessResult || isReplayResult) {
            _spawnMultipleBlocks();
        } else {
            _spawnSingleBlock();
        }
        if (animationCycleState.blocks.length === MAX_FREE_BLOCKS_COUNT && isFree) return;
    }

    function _spawnMultipleBlocks() {
        const activeBlocksCount = animationCycleState.blocks?.length;
        const blocksToSpawn = TOTAL_TILES - activeBlocksCount;

        for (let i = 0; i < blocksToSpawn; i++) {
            const newTile = board.getRandomFreeTile();
            if (newTile) {
                const block = new Block(animationCycleState.blocks.length);
                block.currentTile = newTile;
                block.init();
                block.updateTile();
                addBlock(block);
            }
        }
    }

    function _spawnSingleBlock() {
        let block: Block | null | undefined = null;
        const isFree = flags.isFree;
        const canAddNewBlock = Boolean(animationCycleState.blocks.length < MAX_FREE_BLOCKS_COUNT && isFree);
        console.debug(`isFree=`, isFree);
        if (canAddNewBlock) {
            block = new Block(animationCycleState.blocks.length);
            console.debug(`block1=`, block);
            setLastSpawnedBlock(block);
        }

        if (block) {
            block.currentTile = mainTile;
            block.init();
            block.updateTile();
        }
        console.debug(`block2=`, block);
    }

    function _startNewCycle() {
        const notStarted = flags.hasNotStarted;
        const isFailResult = flags.isFailResult;
        const isStopped = flags.isStopped;

        if (notStarted) return;

        if (animationCycleState.lastSpawnedBlock) {
            addBlock(animationCycleState.lastSpawnedBlock);
            setLastSpawnedBlock(null);
        }
        if (isFailResult || isStopped) return;

        animationCycleState.blocks.forEach((block) => block.resetAfterCycle());
        animationCycleStore.getState().incCycleIndex();

        _spawnBlock();
        _calculatePaths();
    }

    function _calculatePaths() {
        const cycleIndex = animationCycleStore.getState().cycleIndex;
        const activeBlocksCount = animationCycleStore.getState().blocks?.length;

        const _isFree = cycleIndex % 2 === 0 ? true : activeBlocksCount < MAX_FREE_BLOCKS_COUNT - 1;

        if (animationCycleState.lastSpawnedBlock?.hasBeenSpawned) {
            animationCycleState.lastSpawnedBlock.moveToNextTile(_isFree, 0);
        }

        animationCycleState.blocks.forEach((block, index) => {
            if (!block.hasBeenEvaluated && block.hasBeenSpawned) {
                block.moveToNextTile(_isFree, index * 0.2);
            }
        });
    }

    function reset(preventRestart = false) {
        animationCycleState.blocks.forEach((block) => block.reset());
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
        const isResult = flags.isResult;
        const speedRatio = animationCycleStore.getState().animationSpeedRatio;
        const firstStartRatio = animationCycleStore.getState().firstStartAnimationRatio;
        const prevSuccessRatio = animationCycleStore.getState().previousSuccessBlocksAnimationRatio;

        const animationSpeedRatio = Math.min(1, speedRatio + dt * (isResult ? 1 : 0));

        const previousSuccessBlocksAnimationRatio = math.saturate(prevSuccessRatio - dt / 1.5);
        const firstStartAnimationRatio = math.saturate(
            firstStartRatio + dt * (propertiesStore.getState().showVisual ? 1 : 0)
        );

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

        animationCycleState.blocks.forEach((block) => {
            if (block.lifeCycle > 0) {
                isCycleComplete = Boolean(block.hasBeenEvaluated && block.hasAnimationEnded);
            } else {
                isCycleComplete = block.spawnAnimationRatio === 1;
            }
        });

        const { isStopped, isFailResult, isResult } = flags;
        return isCycleComplete || isResult || isFailResult || isStopped;
    }

    function update(dt: number) {
        _updateAnimationRatios(dt);

        successAnimationManager.update(dt);
        stopAnimationManager.update(dt);
        errorAnimationManager.update(dt);

        if (flags.hasNotStarted) {
            _startNewCycle();
            return;
        }

        board.preUpdate(dt);
        if (animationCycleState.lastSpawnedBlock) {
            animationCycleState.lastSpawnedBlock.update(dt);
        }
        animationCycleState.blocks.forEach((block) => block.update(dt));
        board.update(dt);

        const isCycleComplete = _checkCycleCompletion();

        if (isCycleComplete) {
            _startNewCycle();
        }
    }

    async function init() {
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
