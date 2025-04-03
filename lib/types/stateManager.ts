export enum AnimationStatus {
    NOT_STARTED = 'not-started',
    STARTED = 'starting',
    FREE = 'free',
    RESULT = 'result',
    RESULT_ANIMATION = 'result_animation',
    RESTARTING = 'restarting',
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

export const PREVENT_CYCLE_STATES = [AnimationStatus.NOT_STARTED, AnimationStatus.STARTED, AnimationStatus.RESTARTING];
export const RESTART_CYCLE_STATES = [AnimationResult.FAILED, AnimationResult.COMPLETED];

const _FLAG_TYPES = [
    'hasNotStarted',
    'isRestarting',
    'isStarting',
    'isFree',
    'isResultAnimation',
    'isResult',
    'isReplayResult',
    'isSuccessResult',
    'isFailResult',
    'isStopped',
] as const;

type FlagTypeTuple = typeof _FLAG_TYPES;
type FlagType = FlagTypeTuple[number];
export type Flags = Record<FlagType, boolean>;
