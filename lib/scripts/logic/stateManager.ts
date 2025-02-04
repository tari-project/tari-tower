import { properties } from '../core/properties';
import settings from '../core/settings';
import { heroBlocks as blocksVisual } from '../tower';

import { blocks } from './systemManager';
import { canvasSignal, gameEndedSignal, stateSignal, stopAnimationEndedSignal } from './signals';
import { AnimationResult, AnimationStatus, StatusManagerState, SuccessLevel } from '../../types/stateManager';

export const PREVENT_CYCLE_STATES = [AnimationStatus.NOT_STARTED, AnimationStatus.RESTART_ANIMATION, AnimationStatus.RESTART, AnimationStatus.STARTED];
const statusOrder = Object.values(AnimationStatus);

export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];

let statusIndex: StatusManagerState['statusIndex'] = 0;
let status: StatusManagerState['status'] = statusOrder[statusIndex];
let hasNotStarted: StatusManagerState['hasNotStarted'] = true;
let isStart: StatusManagerState['isStart'] = false;
let isFree: StatusManagerState['isFree'] = false;
let isResult: StatusManagerState['isResult'] = false;
let isResultAnimation: StatusManagerState['isResultAnimation'] = false;
let isRestart: StatusManagerState['isRestart'] = false;
let isReplayResult: StatusManagerState['isReplayResult'] = false;
let isSuccessResult: StatusManagerState['isSuccessResult'] = false;
let isFailResult: StatusManagerState['isFailResult'] = false;
let isStopped: StatusManagerState['isStopped'] = false;
let result: StatusManagerState['result'] = AnimationResult.NONE;
let completeAnimationLevel: StatusManagerState['completeAnimationLevel'] = SuccessLevel.ONE;

const StateManager = () => {
	const statusUpdateQueue: StatusManagerState['statusUpdateQueue'] = [];

	function updateAfterCycle() {
		if (properties.errorBlock) {
			if (properties.errorBlock.isErrorBlockFalling || properties.errorBlock.errorLifeCycle < properties.errorBlockMaxLifeCycle) {
				return;
			}
		}
		if (isStart) {
			setFree();
		}
		if (isResult) {
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
		isReplayResult = (isResult || isResultAnimation) && result === AnimationResult.REPLAY;
		isSuccessResult = (isResult || isResultAnimation) && result === AnimationResult.COMPLETED;
		isFailResult = (isResult || isResultAnimation) && result === AnimationResult.FAILED;
		isStopped = (isResult || isResultAnimation) && result === AnimationResult.STOP;
	}

	function _canUpdateStatus(newStatus, hasResult = false, isReplay = false) {
		if (!properties.showVisual) {
			return false;
		}

		if (isReplay && statusIndex === 0) {
			statusIndex = 2;
		}
		const newStateIndex = statusOrder.indexOf(newStatus);
		const nextStatusIndexMatches = (statusIndex + 1) % statusOrder.length === newStateIndex;

		if (nextStatusIndexMatches) {
			statusIndex = newStateIndex;
			status = statusOrder[statusIndex];
			if (!hasResult) {
				updateFlags();
				stateSignal.dispatch(status, result);
				canvasSignal.dispatch(status, result, isReplay);
			}
			return true;
		}
		return false;
	}

	function _updateStatusAndResult({
		status: newStatus,
		result: newResult,
		animationStyle,
		isRemove = false,
	}: {
		status: AnimationStatus;
		result: AnimationResult;
		animationStyle: SuccessLevel | null;
		isRemove?: boolean;
	}) {
		const isReplay = newResult === AnimationResult.REPLAY;
		if (_canUpdateStatus(newStatus, true, isReplay)) {
			if (properties.errorBlock && !properties.errorBlock.isErrorBlockFalling) {
				properties.errorBlock.preventErrorBlockFallAnimation();
				properties.errorBlock = null;
			}

			result = newResult;
			completeAnimationLevel = animationStyle;

			updateFlags();
			stateSignal.dispatch(status, result, completeAnimationLevel);
			canvasSignal.dispatch(status, result, isRemove || isReplay);
		}
	}

	function set(id: string, options?: { isReplay?: boolean; isRemove?: boolean }) {
		const { isRemove, isReplay } = options || {};
		console.debug(`isRemove= ${isRemove}`);
		console.debug(`isReplay= ${isReplay}`);
		const actions = {
			start: () => setStart(),
			free: () => setFree(),
			pause: () => setPause(),
			resume: () => setResume(),
			stop: () => setStop(isRemove),
			fail: () => setFail(),
			resultAnimation: () => setResultAnimation(),
			restartAnimation: () => setRestartAnimation(),
			restart: () => setRestart(),
			showVisual: () => showVisual(),
		};
		const successActions = {
			success: () => setComplete(isReplay),
			success2: () => setComplete2(isReplay),
			success3: () => setComplete3(isReplay),
		};
		actions[id]?.();

		successActions[id]?.();
	}

	function showVisual() {
		properties.showVisual = true;
	}

	function _queueStatusUpdate({
		status,
		result = null,
		animationStyle = null,
		isRemove = false,
	}: {
		status: AnimationStatus;
		result?: AnimationResult | null;
		animationStyle?: SuccessLevel | null;
		isRemove?: boolean;
	}) {
		if (properties.errorBlock && properties.errorBlock?.errorFallAnimationTime < 1) {
			const logicBlock = blocks?.find((block) => block?.id === properties.errorBlock?.id);
			if (logicBlock) {
				logicBlock.isErrorBlock = false;
				blocksVisual.resetBlockFromLogicBlock(logicBlock);
			}
			properties.errorBlock = null;
		}

		statusUpdateQueue.push(() => (result ? _updateStatusAndResult({ status, result, animationStyle }) : _canUpdateStatus(status)));
	}

	function reset() {
		_queueStatusUpdate({ status: AnimationStatus.NOT_STARTED, result: AnimationResult.NONE });
	}

	function setStart() {
		_queueStatusUpdate({ status: AnimationStatus.STARTED });
	}

	function setFree() {
		_queueStatusUpdate({ status: AnimationStatus.FREE });
	}

	function setPause() {
		properties.isPaused = true;
	}

	function setResume() {
		properties.isPaused = false;
	}

	function setStop(isRemove = false) {
		_queueStatusUpdate({ status: AnimationStatus.RESULT, result: AnimationResult.STOP, isRemove });
	}

	function setComplete(isReplay = false) {
		const result = isReplay && hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		_queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.ONE });
	}

	function setComplete2(isReplay = false) {
		const result = isReplay && hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
		_queueStatusUpdate({ status: AnimationStatus.RESULT, result, animationStyle: SuccessLevel.TWO });
	}

	function setComplete3(isReplay = false) {
		const result = isReplay && hasNotStarted ? AnimationResult.REPLAY : AnimationResult.COMPLETED;

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

	function setRestart() {
		statusUpdateQueue.push(() => {
			if (_canUpdateStatus(AnimationStatus.RESTART)) {
				stopAnimationEndedSignal.dispatch();
			}
		});
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
		status,
		result,
	};
};

const stateManager = StateManager();
export { stateManager, statusIndex, status, hasNotStarted, isFree, isResult, isResultAnimation, isRestart, isReplayResult, isSuccessResult, isFailResult, isStopped, result };
