declare enum AnimationStatus {
    NOT_STARTED = "not-started",
    STARTED = "started",
    FREE = "free",
    RESULT = "result",
    RESULT_ANIMATION = "result_animation",
    RESTART_ANIMATION = "restart_animation",
    RESTART = "restart"
}

export declare const getCurrentState: () => AnimationStatus;

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
