import { properties } from '../core/properties';
import { AnimationResult, AnimationStatus, StatusManagerState, SuccessLevel } from '../../types/stateManager';
import { managerStore, setStart, setStop } from '../../store/store.ts';

export const PREVENT_CYCLE_STATES = [
    AnimationStatus.NOT_STARTED,
    AnimationStatus.RESTART_ANIMATION,
    AnimationStatus.RESTART,
    AnimationStatus.STARTED,
];
export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];

interface QueueArgs {
    status: AnimationStatus;
    result?: AnimationResult | null;
    animationStyle?: SuccessLevel | null;
}

let status: AnimationStatus = AnimationStatus.NOT_STARTED;
let result: AnimationResult = AnimationResult.NONE;

const StateManager = () => {
    const statusOrder = Object.values(AnimationStatus);
    let statusIndex = 0;

    const statusUpdateQueue: StatusManagerState['statusUpdateQueue'] = [];

    function _canUpdateStatus(newStatus, result?: AnimationResult | null) {
        if (!properties.showVisual) return false;
        const isReplay = result === AnimationResult.REPLAY;

        if (isReplay && statusIndex === 0) {
            statusIndex = 2;
        }

        if (newStatus === AnimationStatus.NOT_STARTED && result === AnimationResult.NONE && statusIndex === 5) {
            statusIndex = 6;
        }

        const newStateIndex = statusOrder.indexOf(newStatus);
        const canChange = (statusIndex + 1) % statusOrder.length === newStateIndex;
        if (canChange) {
            statusIndex = newStateIndex;
            status = statusOrder[statusIndex];
            if (result) {
                managerStore.getState().addState({ status, result });
                managerStore.getState().updateFlags();
            }
            return true;
        }
        return false;
    }

    function _updateStatusAndResult({ status: newStatus, result: newResult, animationStyle }: QueueArgs) {
        console.debug(`newStatus= ${newStatus}`);
        if (_canUpdateStatus(newStatus, newResult)) {
            if (properties.errorBlock && !properties.errorBlock.isErrorBlockFalling) {
                properties.errorBlock.preventErrorBlockFallAnimation();
                properties.errorBlock = null;
            }
            if (newResult) {
                result = newResult;
            }

            managerStore.getState().addState({ status, result, completeAnimationLevel: animationStyle });
            managerStore.getState().updateFlags();
        }
    }

    function set(id: string, isReplay?: boolean) {
        const actions = {
            start: () => setStart(),
            stop: () => setStop(),
            fail: () => setFail(),
            resultAnimation: () => setResultAnimation(),
            restartAnimation: () => setRestartAnimation(),
            showVisual: () => showVisual(),
            success: () => setComplete(isReplay),
            success2: () => setComplete2(isReplay),
            success3: () => setComplete3(isReplay),
        };
        actions[id]?.();
    }

    function showVisual() {
        properties.showVisual = true;
    }

    function _queueStatusUpdate({ status, result = null, animationStyle = null }: QueueArgs) {
        statusUpdateQueue.push(() =>
            result ? _updateStatusAndResult({ status, result, animationStyle }) : _canUpdateStatus(status)
        );
    }

    function reset() {
        _queueStatusUpdate({ status: AnimationStatus.NOT_STARTED, result: AnimationResult.NONE });
    }

    function setComplete(isReplay = false) {
        const result =
            isReplay && managerStore.getState().flags.hasNotStarted
                ? AnimationResult.REPLAY
                : AnimationResult.COMPLETED;
        _queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.ONE });
    }

    function setComplete2(isReplay = false) {
        const result =
            isReplay && managerStore.getState().flags.hasNotStarted
                ? AnimationResult.REPLAY
                : AnimationResult.COMPLETED;
        _queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.TWO });
    }

    function setComplete3(isReplay = false) {
        const result =
            isReplay && managerStore.getState().flags.hasNotStarted
                ? AnimationResult.REPLAY
                : AnimationResult.COMPLETED;
        _queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.THREE });
    }

    function setFail() {
        _queueStatusUpdate({ status: AnimationStatus.RESULT, result: AnimationResult.FAILED });
    }

    function setResultAnimation() {
        _queueStatusUpdate({ status: AnimationStatus.RESULT_ANIMATION });
    }

    function setRestartAnimation() {
        _queueStatusUpdate({ status: AnimationStatus.RESTART_ANIMATION });
    }

    function init() {
        managerStore.subscribe((state, prevState) => {
            if (state.status !== prevState.status || state.result !== prevState.result) {
                state.updateFlags();
            }
        });
    }

    return {
        init,
        set,
        showVisual,
        reset,
        setStart,
        setRestartAnimation,
        statusIndex,
    };
};

export const stateManager = StateManager();
