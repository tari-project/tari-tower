export declare const getCurrentAnimationState: () => "NOT_STARTED" | "STARTED" | "FREE" | "RESULT" | "RESULT_ANIMATION" | "RESTART_ANIMATION" | "RESTART";

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

declare interface Property {
    property: string;
    value: unknown;
}

export declare function removeTowerAnimation({ canvasId }: {
    canvasId: string;
}): Promise<boolean | undefined>;

export declare function setAnimationProperties(newProps: Property[]): void;

export declare function setAnimationState(id: string, isReplay?: boolean): void;

export { }
