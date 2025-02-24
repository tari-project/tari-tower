let successNotificationTimeout: NodeJS.Timeout | undefined;
let notificationSoundTimeout: NodeJS.Timeout | undefined;
import { properties } from '../core/properties';
import settings from '../core/settings';
import { gameEndedSignal, restartSignal, stateSignal } from './signals';
import { AnimationResult, AnimationStatus, StatusManagerState, SuccessLevel } from '../../types/stateManager';

export const PREVENT_CYCLE_STATES = [AnimationStatus.NOT_STARTED, AnimationStatus.RESTART_ANIMATION, AnimationStatus.RESTART, AnimationStatus.STARTED];
export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];

interface QueueArgs {
	status: AnimationStatus;

	result?: AnimationResult | null;
	animationStyle?: SuccessLevel | null;
}

let status: AnimationStatus = AnimationStatus.NOT_STARTED;
let result: AnimationResult = AnimationResult.NONE;

let hasNotStarted = true;
let isStart = false;
let isFree = false;
let isResult = false;
let isResultAnimation = false;
let isRestart = false;
let isReplayResult = false;
let isSuccessResult = false;
let isFailResult = false;
let isStopped = false;
const StateManager = () => {
	const statusOrder = Object.values(AnimationStatus);
	let statusIndex = 0;
	let removeCanvas = false;
	let notificationSoundCB: (() => void) | undefined = undefined;
	let blockWinSoundCB: ((tier: number) => void) | undefined = undefined;

	const statusUpdateQueue: StatusManagerState['statusUpdateQueue'] = [];
	function updateAfterCycle() {
		if (properties.errorBlock) {
			if (properties.errorBlock.isErrorBlockFalling || properties.errorBlock.errorLifeCycle < properties.errorBlockMaxLifeCycle) {
				return;
			}
		}
		if (isStart) {
			setFree();
		} else if (isResult) {
			setResultAnimation();
		}

		const callback = statusUpdateQueue.shift();
		callback?.();
	}

	function updateFlags() {
		hasNotStarted = status === AnimationStatus.NOT_STARTED;
		isStart = status === AnimationStatus.STARTED;
		isFree = status === AnimationStatus.FREE;
		isResult = status === AnimationStatus.RESULT;
		isResultAnimation = status === AnimationStatus.RESULT_ANIMATION;
		isRestart = status === AnimationStatus.RESTART;

		const isAnyResult = isResult || isResultAnimation;

		isReplayResult = isAnyResult && result === AnimationResult.REPLAY;
		isSuccessResult = isAnyResult && result === AnimationResult.COMPLETED;
		isFailResult = isAnyResult && result === AnimationResult.FAILED;
		isStopped = isAnyResult && result === AnimationResult.STOP;
	}

	function _canUpdateStatus(newStatus, result?: AnimationResult | null) {
		if (!properties.showVisual) return false;
		const hasResult = !!result;
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
			if (!hasResult) {
				updateFlags();
				stateSignal.dispatch(status, result);
			}
			return true;
		}
		return false;
	}

	function _updateStatusAndResult({ status: newStatus, result: newResult, animationStyle }: QueueArgs) {
		if (_canUpdateStatus(newStatus, newResult)) {
			if (properties.errorBlock && !properties.errorBlock.isErrorBlockFalling) {
				properties.errorBlock.preventErrorBlockFallAnimation();
				properties.errorBlock = null;
			}
			if (newResult) {
				result = newResult;
			}

			updateFlags();
			stateSignal.dispatch(status, result, animationStyle);
		}
	}

	function set(id: string, isReplay?: boolean) {
		const actions = {
			start: () => setStart(),
			stop: () => setStop(),
			fail: () => setFail(),
			resultAnimation: () => setResultAnimation(),
			restartAnimation: () => setRestartAnimation(),
			restart: () => setRestart(),
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
		const shouldDelay = result && result === AnimationResult.COMPLETED;

		if (!shouldDelay) {
			statusUpdateQueue.push(() => (result ? _updateStatusAndResult({ status, result, animationStyle }) : _canUpdateStatus(status)));
		} else {
			const notificationSoundDelay = 2; // seconds
			const soundDelayDiffs = {
				[SuccessLevel.ONE]: 0,
				[SuccessLevel.TWO]: 4,
				[SuccessLevel.THREE]: 3,
			};

			const delay = (notificationSoundDelay + soundDelayDiffs[animationStyle ?? 0]) * 1000;
			if (successNotificationTimeout) {
				clearTimeout(successNotificationTimeout);
			}

			if (notificationSoundTimeout) {
				clearTimeout(notificationSoundTimeout);
			}

			notificationSoundTimeout = setTimeout(() => playBlockWinSound(animationStyle), notificationSoundDelay * 1000);
			successNotificationTimeout = setTimeout(() => {
				statusUpdateQueue.push(() => (result ? _updateStatusAndResult({ status, result, animationStyle }) : _canUpdateStatus(status)));
			}, delay);
		}
	}

	function playNotificationSound() {
		notificationSoundCB?.();
	}

	function playBlockWinSound(tier) {
		blockWinSoundCB?.(tier);
	}

	function reset() {
		if (removeCanvas) {
			status = AnimationStatus.NOT_STARTED;
			result = AnimationResult.NONE;

			setRemove(false);

			return;
		}

		_queueStatusUpdate({ status: AnimationStatus.NOT_STARTED, result: AnimationResult.NONE });
	}

	function setStart() {
		status = AnimationStatus.NOT_STARTED;
		_queueStatusUpdate({ status: AnimationStatus.STARTED });
	}

	function setFree() {
		_queueStatusUpdate({ status: AnimationStatus.FREE });
	}

	function setStop() {
		_queueStatusUpdate({ status: AnimationStatus.RESULT, result: AnimationResult.STOP });
	}

	function setComplete(isReplay = false) {
		const result = isReplay && hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		if (!isReplay) playNotificationSound();
		_queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.ONE });
	}

	function setComplete2(isReplay = false) {
		const result = isReplay && hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		if (!isReplay) playNotificationSound();
		_queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.TWO });
	}

	function setComplete3(isReplay = false) {
		const result = isReplay && hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		if (!isReplay) playNotificationSound();
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
	function setRemove(remove: boolean) {
		removeCanvas = remove;
	}
	function setRestart() {
		if (removeCanvas) {
			gameEndedSignal.dispatch();
			return;
		} else {
			statusUpdateQueue.push(() => {
				if (_canUpdateStatus(AnimationStatus.RESTART)) {
					restartSignal.dispatch();
				}
			});
		}
	}

	function init() {
		updateFlags();

		if (settings.AUTO_START) {
			setStart();
		}
	}

	function initAudio(_notificationSoundCB: () => void, _blockWinSoundCB: (tier: number) => void) {
		notificationSoundCB = _notificationSoundCB;
		blockWinSoundCB = _blockWinSoundCB;
	}
	return {
		init,
		initAudio,
		updateAfterCycle,
		set,
		showVisual,
		reset,
		setStart,
		setRestartAnimation,
		setRestart,
		setRemove,
		statusIndex,
	};
};

const stateManager = StateManager();
export { stateManager, status, result, hasNotStarted, isStart, isFree, isResult, isResultAnimation, isRestart, isReplayResult, isSuccessResult, isFailResult, isStopped };
