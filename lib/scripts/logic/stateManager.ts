import { properties } from '../core/properties';
import settings from '../core/settings';
import { gameEndedSignal, stateSignal, winAnimationSignal } from './signals';
import { AnimationResult, AnimationStatus, QueueItem, StatusManagerState, SuccessLevel } from '../../types/stateManager';
import { logInfo, logWarn } from '../utils/logger';

export const PREVENT_CYCLE_STATES = [AnimationStatus.NOT_STARTED, AnimationStatus.RESTART_ANIMATION, AnimationStatus.RESTART, AnimationStatus.STARTED];
export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];

let stateFlags = {
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
};

interface QueueArgs {
	status: AnimationStatus;
	result?: AnimationResult | null;
	animationStyle?: SuccessLevel | null;
}

let status: AnimationStatus = AnimationStatus.NOT_STARTED;
let result: AnimationResult = AnimationResult.NONE;
let statusUpdateQueue: StatusManagerState['statusUpdateQueue'] = [];
const MAX_QUEUE_LENGTH = 4;

const StateManager = () => {
	const statusOrder = Object.values(AnimationStatus);
	let statusIndex = 0;
	let removeCanvas = false;

	function updateAfterCycle() {
		if (properties.errorBlock && properties.errorBlock.isErrorBlockFalling && !stateFlags.isRestart) {
			return;
		}
		if (stateFlags.isStart) {
			setFree();
		}
		if (stateFlags.isResult) {
			setResultAnimation();
		}

		if (statusUpdateQueue.length) {
			statusUpdateQueue.shift()?.callback();
		}
	}

	function updateFlags() {
		const isAnyResult = status === AnimationStatus.RESULT || status === AnimationStatus.RESULT_ANIMATION;

		stateFlags = {
			hasNotStarted: status === AnimationStatus.NOT_STARTED,
			isStart: status === AnimationStatus.STARTED,
			isFree: status === AnimationStatus.FREE,
			isResult: status === AnimationStatus.RESULT,
			isResultAnimation: status === AnimationStatus.RESULT_ANIMATION,
			isRestart: status === AnimationStatus.RESTART,
			isReplayResult: isAnyResult && result === AnimationResult.REPLAY,
			isSuccessResult: isAnyResult && result === AnimationResult.COMPLETED,
			isFailResult: isAnyResult && result === AnimationResult.FAILED,
			isStopped: isAnyResult && result === AnimationResult.STOP,
		};
	}

	/**
	 * Validates and controls state transitions in the animation system.
	 * States must follow a specific sequence: NOT_STARTED → STARTED → FREE → RESULT → RESULT_ANIMATION → RESTART_ANIMATION → RESTART
	 *
	 * @param newStatus - The target state to transition to
	 * @param result - Optional result that may affect the transition
	 * @returns true if the state transition is valid and should proceed
	 */
	function _canUpdateStatus(newStatus: AnimationStatus, result?: AnimationResult | null): boolean {
		// Prevent state changes if visualization is disabled
		if (!properties.showVisual) return false;

		let canUpdateStatus = false;

		const hasResult = !!result;
		const isReplay = result === AnimationResult.REPLAY;
		const isStop = result === AnimationResult.STOP;

		if (isStop) {
			console.debug(newStatus, status);
		}

		// Handle special replay case - allows jumping to FREE state from NOT_STARTED
		if (isReplay && statusIndex === 0) {
			statusIndex = 2; // Jump to FREE state
		}

		const shouldLog = (hasResult && result !== AnimationResult.NONE) || (newStatus === AnimationStatus.STARTED && status !== AnimationStatus.FREE);
		// Calculate if the transition is valid
		const newStateIndex = statusOrder.indexOf(newStatus);
		const isNextState = (statusIndex + 1) % statusOrder.length === newStateIndex;

		if (isNextState) {
			statusIndex = newStateIndex;
			status = statusOrder[statusIndex];
			canUpdateStatus = true;
		}

		if (shouldLog) {
			const resultText = result ? `[${result}]` : '';
			const currentStatus = `${status}${resultText}`;
			const baseLogText = `${newStatus}${resultText}`;
			if (canUpdateStatus) {
				logInfo(`[canUpdateStatus] ✓ | ${baseLogText} added to queue`);
			} else {
				logInfo(`[canUpdateStatus] ✗ | attempted: ${baseLogText} | current: ${currentStatus}`);
			}
		}

		// Only update flags and dispatch if there's no result
		// Results are handled separately in _updateStatusAndResult
		if (canUpdateStatus && !hasResult) {
			updateFlags();
		}
		return canUpdateStatus;
	}

	function _updateStatusAndResult({ status: newStatus, result: newResult, animationStyle }: QueueArgs) {
		const canUpdateStatus = _canUpdateStatus(newStatus, newResult);
		if (canUpdateStatus) {
			if (properties.errorBlock && !properties.errorBlock.isErrorBlockFalling) {
				properties.errorBlock.preventErrorBlockFallAnimation();
				properties.errorBlock = null;
			}
			if (newResult) {
				result = newResult;
			}
			updateFlags();
			if (animationStyle) {
				winAnimationSignal.dispatch(animationStyle);
			}
			stateSignal.dispatch(status, result);
		}
	}

	function set(id: string, isReplay = false) {
		const actions = {
			start: () => setStart(),
			stop: () => setStop(),
			fail: () => setFail(),
			resultAnimation: () => setResultAnimation(),
			restartAnimation: () => setRestartAnimation(),
			restart: () => setRestart(),
			showVisual: () => showVisual(),
			success: () => win(isReplay),
			success2: () => win2(isReplay),
			success3: () => win3(isReplay),
		};
		actions[id]?.();
	}

	function showVisual() {
		properties.showVisual = true;
	}

	/**
	 * Queues a state update. If the update includes a result (stop, success, fail, etc.),
	 * it will clear the existing queue to ensure immediate processing of important state changes.
	 */
	function _queueStatusUpdate({ status, result = null, animationStyle = null }: QueueArgs) {
		const statuses = statusUpdateQueue.map((q) => q.status);
		const results = statusUpdateQueue.map((q) => q.result);
		const queueOverloaded = statuses?.length >= MAX_QUEUE_LENGTH;
		// Clear the queue if it's getting too long or stop initiated
		if (queueOverloaded) {
			logWarn(`Queue too long (${statuses.length}), clearing to prevent backlog`);
			statusUpdateQueue = [];
		}

		const queueItem: QueueItem = result
			? {
					status,
					result,
					callback: () => _updateStatusAndResult({ status, result, animationStyle }),
				}
			: { status, callback: () => _canUpdateStatus(status) };
		const canAddToQueue = Boolean(!statuses.includes(status) || (result && !results.includes(result)));
		if (canAddToQueue) {
			statusUpdateQueue.push(queueItem);
		}
	}

	function reset() {
		if (removeCanvas) {
			status = AnimationStatus.NOT_STARTED;
			result = AnimationResult.NONE;
			statusIndex = 0;

			setRemove(false);

			return;
		}

		_queueStatusUpdate({
			status: AnimationStatus.NOT_STARTED,
			result: AnimationResult.NONE,
		});
	}

	function setStart() {
		_queueStatusUpdate({ status: AnimationStatus.STARTED });
	}

	function setFree() {
		_queueStatusUpdate({ status: AnimationStatus.FREE });
	}

	function setStop() {
		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result: AnimationResult.STOP,
		});
	}

	function win(isReplay = false) {
		const result = isReplay && stateFlags.hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result,
			animationStyle: SuccessLevel.ONE,
		});
	}

	function win2(isReplay = false) {
		const result = isReplay && stateFlags.hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result,
			animationStyle: SuccessLevel.TWO,
		});
	}

	function win3(isReplay = false) {
		const result = isReplay && stateFlags.hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;

		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result,
			animationStyle: SuccessLevel.THREE,
		});
	}

	function setFail() {
		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result: AnimationResult.FAILED,
		});
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
		}

		_queueStatusUpdate({ status: AnimationStatus.RESTART });
	}

	function init() {
		updateFlags();

		if (settings.AUTO_START) {
			setStart();
		}
	}

	function getStatus() {
		return status;
	}

	return {
		init,
		updateAfterCycle,
		set,
		showVisual,
		reset,
		setStart,
		setRestartAnimation,
		setRestart,
		setRemove,
		statusIndex,
		getStatus,
	};
};

const stateManager = StateManager();
export { stateManager, status, result, stateFlags };
