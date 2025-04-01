export enum AnimationStatus {
    NOT_STARTED = 'not-started',
    FREE = 'free',
    RESULT = 'result',
}
export enum AnimationResult {
    NONE = 'none',
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

export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];

const _FLAG_TYPES = [
    'hasNotStarted',
    'isFree',
    'isResult',
    'isReplayResult',
    'isSuccessResult',
    'isFailResult',
    'isStopped',
] as const;

type FlagTypeTuple = typeof _FLAG_TYPES;
type FlagType = FlagTypeTuple[number];
export type Flags = Record<FlagType, boolean>;
