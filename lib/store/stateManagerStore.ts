import { subscribeWithSelector } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { AnimationResult, AnimationStatus, Flags, SuccessLevel } from '../types/stateManager.ts';

interface SetWinArgs {
    isReplay?: boolean;
    completeAnimationLevel?: SuccessLevel | null;
}
type AnimationType = 'starting' | 'free' | 'result' | 'stop' | 'lose';

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
    setAnimationState: (animationType: AnimationType) => void;
    setWinAnimation: ({ isReplay, completeAnimationLevel }: SetWinArgs) => void;
    reset: () => void;
}
type ManagerState = State & Actions;

const initialFlags: Flags = {
    hasNotStarted: true,
    isStarting: false,
    isFree: false,
    isResult: false,
    isReplayResult: false,
    isSuccessResult: false,
    isResultAnimation: false,
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
        setWinAnimation: ({ isReplay, completeAnimationLevel }) =>
            set((currentState) => {
                const notStarted = currentState.status === AnimationStatus.NOT_STARTED;
                const result = isReplay && notStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;

                const flags = {
                    ...currentState.flags,
                    isReplayResult: result === AnimationResult.REPLAY,
                    isSuccessResult: true,
                };
                return { status: AnimationStatus.RESULT, result, completeAnimationLevel, flags };
            }),
        setAnimationState: (animationType: AnimationType) =>
            set((currentState) => {
                let animationStatus: AnimationStatus;
                let animationResult = currentState.result;

                switch (animationType) {
                    case 'starting': {
                        animationStatus = AnimationStatus.STARTED;
                        break;
                    }
                    case 'free': {
                        animationStatus = AnimationStatus.FREE;
                        break;
                    }
                    case 'result': {
                        animationStatus = AnimationStatus.RESULT_ANIMATION;
                        break;
                    }
                    case 'stop': {
                        animationStatus = AnimationStatus.RESULT;
                        animationResult = AnimationResult.STOP;
                        break;
                    }
                    case 'lose': {
                        animationStatus = AnimationStatus.RESULT;
                        animationResult = AnimationResult.FAILED;
                        break;
                    }
                    default: {
                        animationStatus = AnimationStatus.NOT_STARTED;
                    }
                }

                const isResult = animationStatus === AnimationStatus.RESULT;
                const isResultAnimation = animationStatus === AnimationStatus.RESULT_ANIMATION;
                const isAnyResult = isResult || isResultAnimation;

                const newFlags = {
                    isResult,
                    isResultAnimation,
                    hasNotStarted: animationStatus === AnimationStatus.NOT_STARTED,
                    isStarting: animationStatus === AnimationStatus.STARTED,
                    isFree: animationStatus === AnimationStatus.FREE,
                    isReplayResult: isAnyResult && animationResult === AnimationResult.REPLAY,
                    isSuccessResult: isAnyResult && animationResult === AnimationResult.COMPLETED,
                    isFailResult: isAnyResult && animationResult === AnimationResult.FAILED,
                    isStopped: isAnyResult && animationResult === AnimationResult.STOP,
                };

                return {
                    status: animationStatus,
                    result: animationResult,
                    flags: { ...currentState.flags, ...newFlags },
                };
            }),
        reset: () => set((c) => ({ ...initialState, status: c.status })),
    }))
);

export const updateAfterCycle = () => {
    const status = stateManagerStore.getState().status;
    const isResult = stateManagerStore.getState().flags.isResult;

    if (status === AnimationStatus.STARTED) {
        setFree();
    } else if (isResult) {
        stateManagerStore.getState().setAnimationState('result');
    }
};

export const setStart = () => {
    stateManagerStore.getState().setAnimationState('starting');
};

export const setFree = () => {
    stateManagerStore.getState().setAnimationState('free');
};
export const setStop = () => {
    stateManagerStore.getState().setAnimationState('stop');
};
export const setLose = () => {
    stateManagerStore.getState().setAnimationState('lose');
};
export const setWin = ({ isReplay, completeAnimationLevel }: SetWinArgs) => stateManagerStore.getState().setWinAnimation({ isReplay, completeAnimationLevel });
