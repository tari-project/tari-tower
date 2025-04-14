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
const MAX_QUEUE_LENGTH = 7; // amount of statuses

const StateManager = () => {
	const statusOrder = Object.values(AnimationStatus);
	let statusIndex = 0;
	let removeCanvas = false;

	function updateAfterCycle() {
		if (properties.errorBlock) {
			if (properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle - 2) {
			logInfo(
				'long block in updateAfterCycle | ',
				`falling: ${properties.errorBlock?.isErrorBlockFalling}, lifecycle: ${properties.errorBlock?.errorLifeCycle}/${properties.errorBlockMaxLifeCycle}`,
			);
		}
			if (properties.errorBlock.isErrorBlockFalling || properties.errorBlock.errorLifeCycle >= properties.errorBlockMaxLifeCycle - 1) {
				return;
			}
		}
		if (stateFlags.isStart) {
			setFree();
		} else if (stateFlags.isResult) {
			setResultAnimation();
		}

		if (statusUpdateQueue.length !== 0) {
			logInfo(`statusUpdateQueue (${statusUpdateQueue.length}):`, statusUpdateQueue.map((q) => q.status).join(' | '));
			const callback = statusUpdateQueue.shift()?.callback;
			callback?.();
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

		const hasResult = !!result;
		const isReplay = result === AnimationResult.REPLAY;

		// Handle special replay case - allows jumping to FREE state from NOT_STARTED
		if (isReplay && statusIndex === 0) {
			statusIndex = 2; // Jump to FREE state
		}

		// Handle special reset case - allows resetting from RESTART state
		if (newStatus === AnimationStatus.NOT_STARTED && result === AnimationResult.NONE && statusIndex === 5) {
			statusIndex = 6; // Move to next state to allow reset
		}

		// Calculate if the transition is valid
		const newStateIndex = statusOrder.indexOf(newStatus);
		const isNextState = (statusIndex + 1) % statusOrder.length === newStateIndex;
		if (isNextState) {
			statusIndex = newStateIndex;
			status = statusOrder[statusIndex];

			// Only update flags and dispatch if there's no result
			// Results are handled separately in _updateStatusAndResult
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

			if (animationStyle) {
				winAnimationSignal.dispatch(animationStyle);
				return;
			}
			stateSignal.dispatch(status, result);
		}
	}

	function set(id: string, isReplay = false) {
		logInfo(`stateManager.set - id: ${id} ${isReplay ? 'replay' : ''}`);
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

	/**
	 * Queues a state update. If the update includes a result (stop, success, fail, etc.),
	 * it will clear the existing queue to ensure immediate processing of important state changes.
	 */
	function _queueStatusUpdate({ status, result = null, animationStyle = null }: QueueArgs) {
		// Clear queue if it's getting too long
		if (statusUpdateQueue.length >= MAX_QUEUE_LENGTH) {
			logWarn('State update queue too long, clearing to prevent backlog');
			statusUpdateQueue = [];
		}

		// Clear queue for result states to ensure immediate processing
		if (result || status === AnimationStatus.STARTED) {
			statusUpdateQueue = [];
		}

		const queueItem: QueueItem = result
			? {
				status,
				callback: () => _updateStatusAndResult({ status, result, animationStyle }),
			}
			: { status, callback: () => _canUpdateStatus(status) };

		statusUpdateQueue.push(queueItem);
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
		statusUpdateQueue = [];
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

	function setComplete(isReplay = false) {
		const result = isReplay && stateFlags.hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result,
			animationStyle: SuccessLevel.ONE,
		});
	}

	function setComplete2(isReplay = false) {
		const result = isReplay && stateFlags.hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		_queueStatusUpdate({
			status: AnimationStatus.RESULT,
			result,
			animationStyle: SuccessLevel.TWO,
		});
	}

	function setComplete3(isReplay = false) {
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
		} else {
			_queueStatusUpdate({ status: AnimationStatus.RESTART });
		}
	}

	function init() {
		updateFlags();

		if (settings.AUTO_START) {
			setStart();
		}
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
	};
};

const stateManager = StateManager();
export { stateManager, status, result, stateFlags };
