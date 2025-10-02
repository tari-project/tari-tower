export declare const getCurrentAnimationState: () => Status;

export declare const getCurrentFlags: () => {
    hasNotStarted: boolean;
    isStart: boolean;
    isFree: boolean;
    isResult: boolean;
    isResultAnimation: boolean;
    isRestart: boolean;
    isReplayResult: boolean;
    isSuccessResult: boolean;
    isFailResult: boolean;
    isStopped: boolean;
};

export declare const getTowerLogPrefix: (level: any) => string;

export declare function loadTowerAnimation({ canvasId, offset }: {
    canvasId: string;
    offset?: number;
}): Promise<boolean | undefined>;

export declare function removeTowerAnimation({ canvasId }: {
    canvasId: string;
}): Promise<boolean | undefined>;

export declare function setAnimationProperties(newProps: {
    property: string;
    value: unknown;
}[]): void;

export declare function setAnimationState(id: string, isReplay?: boolean): void;

declare type Status = StatusTuple[number];

declare const STATUSES: readonly ["NOT_STARTED", "STARTED", "FREE", "RESULT", "RESULT_ANIMATION", "RESTART_ANIMATION", "RESTART"];

declare type StatusTuple = typeof STATUSES;

export { }
