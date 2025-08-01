import math from '../utils/math';

import { errorAnimationEndedSignal, stateSignal } from './signals';
import { AnimationResult, AnimationStatus } from '../../types/stateManager';
import { logWarn } from '../utils/logger.ts';

let isActive = false;
let failRatio = 0;
const errorAnimationDuration = 3.5; // seconds
let failShakeRatio = 0;
let failFloatingCubesRatio = 0;
let failSpawnRatio = 0;
let failPushDownRatio = 0;

const ErrorAnimationManager = () => {
	function init() {
		stateSignal.add((status, result) => {
			logWarn('hi from ErrorAnimationManager', status, result);
			if (status === AnimationStatus.RESULT && result === AnimationResult.FAILED) {
				isActive = true;
			}
		});
	}

	function resetRatios() {
		failRatio = 0;
		failShakeRatio = 0;
		failFloatingCubesRatio = 0;
		failPushDownRatio = 0;
		failSpawnRatio = 0;
		isActive = false;
	}

	function update(dt: number) {
		failRatio += ((isActive ? 1 : 0) * dt) / errorAnimationDuration;
		failRatio = math.clamp(failRatio, 0, 1);

		failShakeRatio = math.fit(failRatio, 0.0, 0.3, 0, 1);
		failFloatingCubesRatio = math.fit(failRatio, 0.35, 0.65, 0, 1);
		failSpawnRatio = math.fit(failRatio, 0.3, 0.55, 0, 2.5);
		failPushDownRatio = math.fit(failRatio, 0.6, 0.8, 0, 1);
		if (failRatio >= 1) {
			errorAnimationEndedSignal.dispatch();
			resetRatios();
		}
	}

	return {
		init,
		resetRatios,
		update,
	};
};
const errorAnimationManager = ErrorAnimationManager();
export { errorAnimationManager, failShakeRatio, failFloatingCubesRatio, failSpawnRatio, failPushDownRatio, errorAnimationDuration };
