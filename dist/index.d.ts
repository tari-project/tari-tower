declare enum AnimationResult {
    NONE = "none",
    PAUSE = "pause",
    STOP = "stop",
    COMPLETED = "completed",
    FAILED = "failed",
    REPLAY = "replay"
}

export declare let animationResult: StatusManagerState['result'];

declare enum AnimationStatus {
    NOT_STARTED = "not-started",
    STARTED = "started",
    FREE = "free",
    RESULT = "result",
    RESULT_ANIMATION = "result_animation",
    RESTART_ANIMATION = "restart_animation",
    RESTART = "restart"
}

export declare let animationStatus: StatusManagerState['status'];

export declare let animationStatusIndex: StatusManagerState['statusIndex'];

export declare function loadTowerAnimation(canvasId: string, offset?: number): Promise<void>;

declare interface Property {
    property: string;
    value: unknown;
}

export declare function removeTowerAnimation(canvasId: string): Promise<void>;

export declare function setAnimationProperties(newProps: Property[]): void;

export declare function setAnimationState(id: string, isReplay?: boolean): void;

declare interface StatusManagerState {
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

declare enum SuccessLevel {
    ONE = 1,
    TWO = 2,
    THREE = 3
}

export { }
