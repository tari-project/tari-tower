import Tile from '../scripts/logic/Tile';
import { customEasing } from '../scripts/utils/ease.ts';

interface Vector {
    x: number;
    y: number;
}

export interface BlockType {
    id: number;
    isMoving?: boolean;
    hasBeenSpawned?: boolean;
    hasAnimationEnded?: boolean;
    hasBeenEvaluated?: boolean;
    currentTile: Tile | null;
    targetTile: Tile | null;
    moveAnimationRatio: number;
    spawnAnimationRatio: number;
    spawnAnimationRatioUnclamped: number;
    easedAnimationRatio: number;
    randomVector?: Vector;

    lifeCycle: number;
    easingFunction?: ((x?: number) => number) | null;
    errorLifeCycle: number;
    isErrorBlock?: boolean;
    errorPreFallAnimationTime: number;
    errorPreFallAnimationTimeScale: number;
    errorFallAnimationTime: number;
    isErrorBlockFalling?: boolean;
    skipFallAnimation?: boolean;
}

export interface IBlock {
    id: number;
    isMoving?: boolean;
    hasBeenSpawned?: boolean;
    hasAnimationEnded?: boolean;
    hasBeenEvaluated?: boolean;
    currentTile?: Tile | null;
    targetTile: Tile | null;
    moveAnimationRatio: number;
    spawnAnimationRatio: number;
    spawnAnimationRatioUnclamped: number;
    easedAnimationRatio: number;
    randomVector?: Vector;

    lifeCycle: number;
    easingFunction?: (x?: number) => ReturnType<typeof customEasing>;
    errorLifeCycle: number;
}

export interface CreateBlock {
    id: number;
    currentTile?: Tile;
}
