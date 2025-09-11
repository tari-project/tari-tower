import math from '../utils/math';
import { stateSignal, stopAnimationEndedSignal } from './signals';
import { AnimationResult, AnimationStatus } from '../../types/stateManager';

const stopAnimationDuration = 2.25; // seconds
let isActive = false;
let stopRatio = 0;
let stopSpawnRatio = 0;
let stopPushDownRatio = 0;

const StopAnimationManager = () => {
	function init() {
		stateSignal.add((status, result) => {
			if (status === AnimationStatus.RESULT && result === AnimationResult.STOP) {
				isActive = true;
			}
		});
	}

	function resetRatios() {
		stopRatio = 0;
		stopPushDownRatio = 0;
		stopSpawnRatio = 0;
		isActive = false;
	}

	function update(dt: number) {
		stopRatio += ((isActive ? 1 : 0) * dt) / stopAnimationDuration;
		stopRatio = math.clamp(stopRatio, 0, 1);

		stopSpawnRatio = math.fit(stopRatio, 0, 0.5, 0, 2.5);
		stopPushDownRatio = math.fit(stopRatio, 0.4, 0.65, 0, 1);

		if (stopRatio >= 1) {
			stopAnimationEndedSignal.dispatch();
			resetRatios();
		}
	}

	return {
		init,
		update,
		resetRatios,
	};
};
const stopAnimationManager = StopAnimationManager();
export { stopAnimationManager, stopSpawnRatio, stopPushDownRatio };
