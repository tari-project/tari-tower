import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { properties } from '../scripts/core/properties.ts';
import { AnimationResult, AnimationStatus, Flags, SuccessLevel } from '../types/stateManager.ts';

interface SetWinArgs {
    isReplay?: boolean;
    completeAnimationLevel?: SuccessLevel | null;
}

interface State {
    status: AnimationStatus;
    preventRestartCycle: boolean;
    result: AnimationResult;
    destroyCanvas: boolean;
    completeAnimationLevel?: SuccessLevel | null;
    animationTypeEnded?: 'stop' | 'win' | 'lose' | null;
    flags: Flags;
}
interface Actions {
    setPreventRestartCycle: (preventRestartCycle: boolean) => void;
    setDestroyCanvas: (destroyCanvas: boolean) => void;
    setAnimationTypeEnded: (animationTypeEnded: 'stop' | 'win' | 'lose' | null) => void;
    reset: () => void;
}
export type ManagerState = State & Actions;

const initialFlags: Flags = {
    hasNotStarted: true,
    isStart: false,
    isFree: false,
    isResult: false,
    isResultAnimation: false,
    isRestart: false,
    isReplayResult: false,
    isSuccessResult: false,
    isFailResult: false,
    isStopped: false,
    isAnyResult: false,
};
const initialState: State = {
    flags: initialFlags,
    destroyCanvas: false,
    preventRestartCycle: false,
    animationTypeEnded: null,
    status: AnimationStatus.NOT_STARTED,
    result: AnimationResult.NONE,
};
export const stateManagerStore = createStore<ManagerState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
        setPreventRestartCycle: (preventRestartCycle) => set({ preventRestartCycle }),
        setDestroyCanvas: (destroyCanvas: boolean) => set({ destroyCanvas }),
        setAnimationTypeEnded: (animationTypeEnded) => set({ animationTypeEnded }),
        reset: () => set(initialState),
    }))
);

export const setStart = () => {
    stateManagerStore.setState({ status: AnimationStatus.FREE });
    updateFlags();
};
export const setLose = () => {
    stateManagerStore.setState({ status: AnimationStatus.RESULT, result: AnimationResult.FAILED });
    updateFlags();
};
export const setStop = () => {
    stateManagerStore.setState({ status: AnimationStatus.RESULT, result: AnimationResult.STOP });
    updateFlags();
};
export const setWin = ({ isReplay, completeAnimationLevel }: SetWinArgs) => {
    const notStarted = stateManagerStore.getState().flags.hasNotStarted;
    const result = isReplay && notStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
    stateManagerStore.setState({ status: AnimationStatus.RESULT, result, completeAnimationLevel });
    updateFlags();
};
export function showVisual() {
    properties.showVisual = true;
}

export const updateFlags = () =>
    stateManagerStore.setState((state) => {
        const { status, result } = state;
        const isResult = status === AnimationStatus.RESULT;
        const isResultAnimation = status === AnimationStatus.RESULT_ANIMATION;
        const isAnyResult = isResult || isResultAnimation;

        const newFlags = {
            isResult,
            isResultAnimation,
            isAnyResult,
            hasNotStarted: status === AnimationStatus.NOT_STARTED,
            isStart: status === AnimationStatus.STARTED,
            isFree: status === AnimationStatus.FREE,
            isRestart: status === AnimationStatus.RESTART,
            isReplayResult: isAnyResult && result === AnimationResult.REPLAY,
            isSuccessResult: isAnyResult && result === AnimationResult.COMPLETED,
            isFailResult: isAnyResult && result === AnimationResult.FAILED,
            isStopped: isAnyResult && result === AnimationResult.STOP,
        };
        return {
            flags: { ...state.flags, ...newFlags },
        };
    });
