declare enum AnimationStatus {
    NOT_STARTED = "not-started",
    STARTED = "started",
    FREE = "free",
    RESULT = "result",
    RESULT_ANIMATION = "result_animation",
    RESTART_ANIMATION = "restart_animation",
    RESTART = "restart"
}

/**
 * Current animation state
 */
export declare const animationStatus: AnimationStatus;

export declare const getTowerLogPrefix: (level: any) => string;

export declare function loadTowerAnimation({ canvasId, offset }: {
    canvasId: string;
    offset?: number;
}): Promise<void>;

/**
 * Animation properties
 */
declare interface Property {
    property: string;
    value: unknown;
}

export declare function removeTowerAnimation({ canvasId }: {
    canvasId: string;
}): Promise<void>;

export declare function setAnimationProperties(newProps: Property[]): void;

export declare function setAnimationState(id: string, isReplay?: boolean): void;

export { }
