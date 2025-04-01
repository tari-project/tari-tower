export declare function loadTowerAnimation({ canvasId, offset }: {
    canvasId: string;
    offset?: number;
}): Promise<void>;

export declare function removeTowerAnimation({ canvasId }: {
    canvasId: string;
}): Promise<void>;

export declare const setAnimationProperties: (properties: Record<string, unknown>[]) => void;

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

export { }
