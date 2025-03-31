import { ColorRepresentation } from 'three';

declare class Block {
    id: BlockType['id'];
    isMoving: BlockType['isMoving'];
    hasBeenSpawned: BlockType['hasBeenSpawned'];
    hasAnimationEnded: BlockType['hasAnimationEnded'];
    hasBeenEvaluated: BlockType['hasBeenEvaluated'];
    currentTile: BlockType['currentTile'];
    targetTile: BlockType['targetTile'];
    moveAnimationRatio: BlockType['moveAnimationRatio'];
    spawnAnimationRatio: BlockType['spawnAnimationRatio'];
    spawnAnimationRatioUnclamped: BlockType['spawnAnimationRatioUnclamped'];
    easedAnimationRatio: BlockType['easedAnimationRatio'];
    randomVector: BlockType['randomVector'];
    lifeCycle: BlockType['lifeCycle'];
    easingFunction: BlockType['easingFunction'];
    errorLifeCycle: BlockType['errorLifeCycle'];
    isErrorBlock: BlockType['isErrorBlock'];
    errorPreFallAnimationTime: BlockType['errorPreFallAnimationTime'];
    errorPreFallAnimationTimeScale: BlockType['errorPreFallAnimationTimeScale'];
    errorFallAnimationTime: BlockType['errorFallAnimationTime'];
    isErrorBlockFalling: BlockType['isErrorBlockFalling'];
    skipFallAnimation: BlockType['skipFallAnimation'];
    constructor(id: any);
    init(): void;
    _setNewEasingFunction(): void;
    updateTile(): void;
    _findBestTile(neighbours: any, isFree: any): any;
    moveToNextTile(nextFree?: boolean, animationDelay?: number): void;
    resetAfterCycle(): void;
    reset(keepId?: boolean): void;
    _onMovementEnd(): void;
    _updateSpawnAnimation(dt: number): void;
    _updateMovement(dt: number): void;
    _updateTileRatios(): void;
    update(dt: number): void;
}

declare interface BlockType {
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

declare interface IPropertiesState {
    time: number;
    deltaTime: number;
    offsetX: number;
    cameraOffsetX: number;
    bgColor1: ColorRepresentation;
    bgColor2: ColorRepresentation;
    width: number;
    height: number;
    viewportWidth: number;
    viewportHeight: number;
    neutralColor: ColorRepresentation;
    mainColor: ColorRepresentation;
    successColor: ColorRepresentation;
    failColor: ColorRepresentation;
    particlesOpacity: number;
    particlesSize: number;
    particlesColor?: ColorRepresentation;
    goboIntensity: number;
    showVisual: boolean;
    errorBlock?: Block | null;
}

export declare interface IPropertyPair {
    propertyName: TPropertyName;
    value: TPropertyValue;
}

export declare function loadTowerAnimation({ canvasId, offset }: {
    canvasId: string;
    offset?: number;
}): Promise<void>;

export declare function removeTowerAnimation({ canvasId }: {
    canvasId: string;
}): Promise<void>;

export declare const setAnimationProperties: (properties: IPropertyPair[]) => void;

export declare const setLose: () => void;

export declare const setStart: () => void;

export declare const setStop: () => void;

export declare const setWin: ({ isReplay, completeAnimationLevel }: SetWinArgs) => void;

declare interface SetWinArgs {
    isReplay?: boolean;
    completeAnimationLevel?: SuccessLevel | null;
}

export declare function showVisual(): void;

export declare enum SuccessLevel {
    ONE = 1,
    TWO = 2,
    THREE = 3
}

declare class Tile {
    id: number;
    row: number;
    col: number;
    distance: number;
    MAX_DISTANCE: number;
    priority: number;
    isMain: boolean;
    isBorder: boolean;
    isOccupied: boolean;
    willBeOccupied: boolean;
    activeRatio: number;
    neighbours: (Tile | null)[] | null;
    reachableNeighbours: (Tile | null)[] | null;
    prioritySortedReachableNeighbours: (Tile | null)[] | null;
    randomDelay: number;
    loseAnimationPositionArray: Float32Array<ArrayBuffer>;
    loseAnimationOrientArray: Float32Array<ArrayBuffer>;
    constructor(id?: number, row?: number, col?: number);
    init(): void;
    _sortPriorityNeighbours(): void;
    shuffleReachableNeighbours(): void;
    preUpdate(_dt: number): void;
    reset(): void;
    update(_dt: number): void;
}

declare type TPropertyName = keyof IPropertiesState;

declare type TPropertyValue = IPropertiesState[TPropertyName];

declare interface Vector {
    x: number;
    y: number;
}

export { }
