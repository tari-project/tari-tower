import { createStore } from 'zustand/vanilla';

import { AnimationResult, AnimationStatus, SuccessLevel } from '../types';

interface State {
    status: AnimationStatus;
    result: AnimationResult;
    preventRestartCycle: boolean;
    destroyCanvas: boolean;
    completeAnimationLevel?: SuccessLevel | null;
    animationTypeEnded?: 'stop' | 'win' | 'lose' | null;
}
interface Actions {
    addState: ({
        status,
        result,
        completeAnimationLevel,
    }: {
        status: AnimationStatus;
        result?: AnimationResult | null;
        completeAnimationLevel?: SuccessLevel | null;
    }) => void;
    setPreventRestartCycle: (preventRestartCycle: boolean) => void;
    setDestroyCanvas: (destroyCanvas: boolean) => void;
    setAnimationTypeEnded: (animationTypeEnded?: 'stop' | 'win' | 'lose' | null) => void;
}

export type ManagerState = State & Actions;

export const managerStore = createStore<ManagerState>()((set) => ({
    destroyCanvas: false,
    preventRestartCycle: false,
    animationTypeEnded: null,
    status: AnimationStatus.NOT_STARTED,
    result: AnimationResult.NONE,
    addState: () =>
        set(({ status, result, completeAnimationLevel }: ManagerState) => ({ status, result, completeAnimationLevel })),
    setPreventRestartCycle: (preventRestartCycle) => set({ preventRestartCycle }),
    setDestroyCanvas: (destroyCanvas: boolean) => set({ destroyCanvas }),
    setAnimationTypeEnded: (animationTypeEnded) => set({ animationTypeEnded }),
}));

export const setStart = () => managerStore.setState({ status: AnimationStatus.FREE });
export const setStop = () => managerStore.setState({ status: AnimationStatus.RESULT, result: AnimationResult.STOP });
