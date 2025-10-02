import { QueueArgs, QueueItem, Result, Status, STATUSES, StatusManagerState, WinLevel } from '../../types/stateManager';
import { logInfo, logWarn } from '../utils/logger';
import { properties } from '../core/properties';
import settings from '../core/settings';
import { gameEndedSignal, stateSignal, winAnimationSignal } from './signals';

const MAX_QUEUE_LENGTH = 4;

export const StateManager = () => {
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
	let status: Status = 'NOT_STARTED';
	let result: Result = 'NONE';
	let statusUpdateQueue: StatusManagerState['statusUpdateQueue'] = [];
	let _statusIndex = 0;
	let _removeCanvas = false;

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

	function _updateFlags() {
		const isAnyResult = status === 'RESULT' || status === 'RESULT_ANIMATION';

		stateFlags = {
			hasNotStarted: status === 'NOT_STARTED',
			isStart: status === 'STARTED',
			isFree: status === 'FREE',
			isResult: status === 'RESULT',
			isResultAnimation: status === 'RESULT_ANIMATION',
			isRestart: status === 'RESTART',
			isReplayResult: isAnyResult && result === 'REPLAY',
			isSuccessResult: isAnyResult && result === 'COMPLETED',
			isFailResult: isAnyResult && result === 'FAILED',
			isStopped: isAnyResult && result === 'STOP',
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
	function _canUpdateStatus(newStatus: Status, result?: Result | null): boolean {
		if (!properties.showVisual) return false;
		let canUpdateStatus = false;
		const hasResult = !!result;
		const isReplay = result === 'REPLAY';

		// Handle special replay case - allows jumping to FREE state from NOT_STARTED
		if (isReplay && _statusIndex === 0) {
			_statusIndex = 2; // Jump to FREE state
		}

		// Handle special reset case - allows resetting from the RESTART state
		if (newStatus === 'NOT_STARTED' && result === 'NONE' && _statusIndex === 5) {
			_statusIndex = 6; // Move to the end to allow reset
		}

		// Handle special quick restart (due to quick mining changes in TU)
		if (newStatus === 'STARTED' && _statusIndex === 5) {
			_statusIndex = 0; // Move to the start
		}

		const shouldLog = (hasResult && result !== 'NONE') || (newStatus === 'STARTED' && status !== 'FREE');
		// Calculate if the transition is valid
		const newStateIndex = STATUSES.indexOf(newStatus);
		const isNextState = (_statusIndex + 1) % STATUSES.length === newStateIndex;

		if (isNextState) {
			_statusIndex = newStateIndex;
			status = STATUSES[_statusIndex];
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
			_updateFlags();
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
			_updateFlags();
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
			ONE: () => setWin(id as WinLevel, isReplay),
			TWO: () => setWin(id as WinLevel, isReplay),
			THREE: () => setWin(id as WinLevel, isReplay),
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
		if (_removeCanvas) {
			status = 'NOT_STARTED';
			result = 'NONE';
			_statusIndex = 0;

			setRemove(false);

			return;
		}

		_queueStatusUpdate({
			status: 'NOT_STARTED',
			result: 'NONE',
		});
	}

	function setStart() {
		statusUpdateQueue = [];
		_queueStatusUpdate({ status: 'STARTED' });
	}

	function setFree() {
		_queueStatusUpdate({ status: 'FREE' });
	}

	function setStop() {
		_queueStatusUpdate({
			status: 'RESULT',
			result: 'STOP',
		});
	}

	function setWin(level: WinLevel, isReplay = false) {
		const result = isReplay && stateFlags.hasNotStarted ? 'REPLAY' : 'COMPLETED';
		_queueStatusUpdate({
			status: 'RESULT',
			result,
			animationStyle: level,
		});
	}

	function setFail() {
		_queueStatusUpdate({
			status: 'RESULT',
			result: 'FAILED',
		});
	}

	function setResultAnimation() {
		_queueStatusUpdate({ status: 'RESULT_ANIMATION' });
	}

	function setRestartAnimation() {
		_queueStatusUpdate({ status: 'RESTART_ANIMATION' });
	}
	function setRemove(remove: boolean) {
		_removeCanvas = remove;
	}
	function setRestart() {
		if (_removeCanvas) {
			gameEndedSignal.dispatch();
			return;
		}

		_queueStatusUpdate({ status: 'RESTART' });
	}

	function init() {
		if (settings.AUTO_START) {
			setStart();
		}
	}

	function getStatus(): Status {
		return status;
	}
	function getResult() {
		return result;
	}
	function getFlags() {
		return stateFlags;
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
		getStatus,
		getFlags,
		getResult,
	};
};
