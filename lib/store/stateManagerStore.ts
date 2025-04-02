import { subscribeWithSelector } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { AnimationResult, AnimationStatus, Flags, SuccessLevel } from '../types/stateManager.ts';

interface SetWinArgs {
    isReplay?: boolean;
    completeAnimationLevel?: SuccessLevel | null;
}
type AnimationType = 'starting' | 'started' | 'stop' | 'lose';

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
                    case 'started': {
                        if (currentState.status === AnimationStatus.STARTED) {
                            animationStatus = AnimationStatus.FREE;
                        } else {
                            animationStatus = currentState.status;
                        }
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

                const newFlags = {
                    isResult,
                    hasNotStarted: animationStatus === AnimationStatus.NOT_STARTED,
                    isStarting: animationStatus === AnimationStatus.STARTED,
                    isFree: animationStatus === AnimationStatus.FREE,
                    isReplayResult: isResult && animationResult === AnimationResult.REPLAY,
                    isSuccessResult: isResult && animationResult === AnimationResult.COMPLETED,
                    isFailResult: isResult && animationResult === AnimationResult.FAILED,
                    isStopped: isResult && animationResult === AnimationResult.STOP,
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

export const setStart = () => {
    stateManagerStore.getState().setAnimationState('starting');
};
export const setStarted = () => {
    stateManagerStore.getState().setAnimationState('started');
};
export const setStop = () => {
    stateManagerStore.getState().setAnimationState('stop');
};
export const setLose = () => {
    stateManagerStore.getState().setAnimationState('lose');
};
export const setWin = ({ isReplay, completeAnimationLevel }: SetWinArgs) => stateManagerStore.getState().setWinAnimation({ isReplay, completeAnimationLevel });
