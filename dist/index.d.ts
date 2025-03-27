export declare function loadTowerAnimation({ canvasId, offset }: {
    canvasId: string;
    offset?: number;
}): Promise<void>;

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
