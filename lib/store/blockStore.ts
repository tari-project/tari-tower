import { createStore } from 'zustand/vanilla';
import { IBlock, CreateBlock } from '../types/block.ts';
import { customEasing } from '../scripts/utils/ease.ts';
import math from '../scripts/utils/math.ts';
import { ANIMATION_SPEED } from '../scripts/core/settings.ts';
import { stateManagerStore } from './stateManagerStore.ts';

interface State {
    blocks: IBlock[];
}
interface Actions {
    setNewBlock(newBlock: IBlock): void;
    setUpdateBlock(block: IBlock): void;
    resetAfterCycle: () => void;
    reset: () => void;
}
type BlockStoreState = State & Actions;

const initialBlock: IBlock = {
    id: -1,
    isMoving: false,
    hasBeenSpawned: false,
    hasAnimationEnded: false,
    hasBeenEvaluated: false,
    currentTile: null,
    targetTile: null,
    moveAnimationRatio: 0,
    spawnAnimationRatio: 0,
    spawnAnimationRatioUnclamped: -Math.random(),
    easedAnimationRatio: 0,
    lifeCycle: 0,
    errorLifeCycle: 0,
    randomVector: {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
    },
};
function _getNewEasingFunction() {
    const rand = Math.random();
    const thresh = 0.25;
    return (x?: number) => customEasing(math.fit(x, rand * thresh, rand * thresh + (1 - thresh), 0, 1));
}
export const blockStore = createStore<BlockStoreState>()((set) => ({
    blocks: [],
    setNewBlock: (newBlock) =>
        set((c) => {
            if (!c.blocks.length) {
                return { blocks: [newBlock] };
            }
            return {
                blocks: [...c.blocks, newBlock],
            };
        }),
    setUpdateBlock: (block) =>
        set((c) => {
            const currentList = c.blocks;
            const currentIndex = c.blocks.findIndex((b) => b.id === block.id);
            currentList[currentIndex] = block;

            return { blocks: currentList };
        }),
    resetAfterCycle: () =>
        set((state) => {
            const resetBlocks = state.blocks.map((block) => {
                updateTile(block);
                return {
                    ...initialBlock,
                    easingFunction: _getNewEasingFunction(),
                    lifeCycle: block.lifeCycle + 1,
                    id: block.id,
                };
            });
            return { blocks: resetBlocks };
        }),
    reset: () => set({ blocks: [] }),
}));

export function createBlock({ id, currentTile }: CreateBlock): IBlock {
    const newBlock = {
        ...initialBlock,
        id,
        currentTile,
        easingFunction: _getNewEasingFunction(),
    };
    blockStore.getState().setNewBlock(newBlock);

    return newBlock;
}

export function updateTile(block: IBlock) {
    if (block.currentTile) {
        block.currentTile.isOccupied = true;
        block.currentTile.willBeOccupied = false;
        blockStore.getState().setUpdateBlock(block);
    }
}
export function updateBlock(block: IBlock, dt: number) {
    const t = block;

    function _onMovementEnd() {
        t.moveAnimationRatio = 1;

        if (t.currentTile) {
            t.currentTile.isOccupied = false;
        }
        t.currentTile = t.targetTile;
        t.targetTile = null;

        t.hasAnimationEnded = true;

        updateTile(t);
    }

    if (!t.hasBeenSpawned) {
        //_updateSpawnAnimation
        t.spawnAnimationRatioUnclamped += 0.75 * ANIMATION_SPEED * dt;
        t.spawnAnimationRatio = Math.max(0, Math.min(1, t.spawnAnimationRatioUnclamped));

        if (t.spawnAnimationRatio === 1) {
            t.hasBeenSpawned = true;
        }
    } else {
        //_updateMovement
        const isResult = stateManagerStore.getState().flags.isResult;
        const isFree = stateManagerStore.getState().flags.isFree;
        if ((t.isMoving && !t.hasAnimationEnded) || isResult) {
            t.moveAnimationRatio = Math.min(1, t.moveAnimationRatio + ANIMATION_SPEED * dt);
            t.easedAnimationRatio = t.easingFunction?.(Math.max(0, t.moveAnimationRatio)) || 0;

            if (t.easedAnimationRatio === 1 && (isFree || isResult)) {
                _onMovementEnd();
            }
        }
    }

    //_updateTileRatios

    const clampedMoveAnimationRatio = Math.max(0, Math.min(1, t.hasBeenSpawned ? t.easedAnimationRatio : t.spawnAnimationRatio));

    if (t.currentTile) {
        t.currentTile.activeRatio = t.hasBeenSpawned ? (t.targetTile ? 1 - clampedMoveAnimationRatio : 1) : t.spawnAnimationRatio;
    }
    if (t.targetTile) {
        t.targetTile.activeRatio = clampedMoveAnimationRatio;
    }

    blockStore.getState().setUpdateBlock(t);
}

function _findBestTile(neighbours, isFree, currentTile) {
    return neighbours.find((tile) => {
        if (tile.isOccupied || tile.willBeOccupied || tile.isMain) return false;
        return isFree || (currentTile?.priority ?? 0) >= tile.priority;
    });
}

export function moveToNextTile(block: IBlock, nextFree = false, animationDelay = 0) {
    const t = block;
    t.hasBeenEvaluated = true;
    t.moveAnimationRatio = -animationDelay;

    if (!t.currentTile) return;

    t.currentTile.shuffleReachableNeighbours();
    const neighbours = nextFree ? t.currentTile.reachableNeighbours : t.currentTile.prioritySortedReachableNeighbours;

    const bestTile = _findBestTile(neighbours, nextFree, t.currentTile);

    if (bestTile && (!t.currentTile.isMain || Math.random() <= 0.8)) {
        t.targetTile = bestTile;
        if (t.targetTile) {
            t.targetTile.willBeOccupied = true;
        }
        t.isMoving = true;
    } else {
        t.hasAnimationEnded = true;
    }
    blockStore.getState().setUpdateBlock(t);
}
