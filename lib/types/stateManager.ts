export enum AnimationStatus {
    NOT_STARTED = 'not-started',
    STARTED = 'started',
    FREE = 'free',
    RESULT = 'result',
    RESULT_ANIMATION = 'result_animation',
    RESTART_ANIMATION = 'restart_animation',
    RESTART = 'restart',
}
export enum AnimationResult {
    NONE = 'none',
    PAUSE = 'pause',
    STOP = 'stop',
    COMPLETED = 'completed',
    FAILED = 'failed',
    REPLAY = 'replay',
}

export enum SuccessLevel {
    ONE = 1,
    TWO = 2,
    THREE = 3,
}

export interface StatusManagerState {
    status: AnimationStatus;
    statusIndex: number;
    result: AnimationResult;
    completeAnimationLevel: SuccessLevel | null;

    isStart: boolean;
    isFree: boolean;
    isResult: boolean;
    isResultAnimation: boolean;
    hasNotStarted: boolean;
    isRestart: boolean;
    isReplayResult: boolean;
    isSuccessResult: boolean;
    isFailResult: boolean;
    isStopped: boolean;
    statusUpdateQueue: (() => void)[];
}

export const PREVENT_CYCLE_STATES = [
    AnimationStatus.NOT_STARTED,
    AnimationStatus.RESTART_ANIMATION,
    AnimationStatus.RESTART,
    AnimationStatus.STARTED,
];
export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];

const _FLAG_TYPES = [
    'hasNotStarted',
    'isStart',
    'isFree',
    'isResult',
    'isResultAnimation',
    'isRestart',
    'isReplayResult',
    'isSuccessResult',
    'isFailResult',
    'isStopped',
    'isAnyResult',
] as const;
type FlagTypeTuple = typeof _FLAG_TYPES;
export type FlagType = FlagTypeTuple[number];
export type Flags = Record<FlagType, boolean>;
