import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { AnimationResult, AnimationStatus, Flags, SuccessLevel } from '../types/stateManager.ts';
import { propertiesStore } from './propertiesStore.ts';

interface SetWinArgs {
    isReplay?: boolean;
    completeAnimationLevel?: SuccessLevel | null;
}

interface State {
    status: AnimationStatus;
    result: AnimationResult;
    destroyCanvas: boolean;
    completeAnimationLevel?: SuccessLevel | null;
    animationTypeEnded: 'stop' | 'win' | 'lose' | null;
    flags: Flags;
}
interface Actions {
    setDestroyCanvas: (destroyCanvas: boolean) => void;
    setAnimationTypeEnded: (animationTypeEnded: 'stop' | 'win' | 'lose' | null) => void;
    reset: () => void;
}
type ManagerState = State & Actions;

const initialFlags: Flags = {
    hasNotStarted: true,
    isFree: false,
    isResult: false,
    isRestart: false,
    isReplayResult: false,
    isSuccessResult: false,
    isFailResult: false,
    isStopped: false,
};
const initialState: State = {
    flags: initialFlags,
    destroyCanvas: false,
    animationTypeEnded: null,
    status: AnimationStatus.NOT_STARTED,
    result: AnimationResult.NONE,
};
export const stateManagerStore = createStore<ManagerState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
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
    propertiesStore.getState().setProperty({ propertyName: 'showVisual', value: true });
}

export const updateFlags = () =>
    stateManagerStore.setState((state) => {
        const { status, result } = state;
        const isResult = status === AnimationStatus.RESULT;

        const newFlags = {
            isResult,
            hasNotStarted: status === AnimationStatus.NOT_STARTED,
            isFree: status === AnimationStatus.FREE,
            isRestart: status === AnimationStatus.RESTART,
            isReplayResult: isResult && result === AnimationResult.REPLAY,
            isSuccessResult: isResult && result === AnimationResult.COMPLETED,
            isFailResult: isResult && result === AnimationResult.FAILED,
            isStopped: isResult && result === AnimationResult.STOP,
        };
        return {
            flags: { ...state.flags, ...newFlags },
        };
    });
