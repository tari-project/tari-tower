import math from '../utils/math';

import { completeAnimationEndedSignal, winAnimationSignal } from './signals';
import { WinLevel } from '../../types/stateManager';

export const SuccessAnimationManager = () => {
	let currentAnimationStyle: WinLevel | null;
	let successRatio = 0;
	const successAnimationDuration = 6.5; // seconds
	let towerRotationRatio = 0;
	let floatingCoinsRatio = 0;
	let floatingCubesRatio = 0;
	let vortexCoinsRatio = 0;
	let successPushDownRatio = 0;
	let successColorTowerRatio = 0;
	let floatingCubesDisplacement = 1;

	function init() {
		winAnimationSignal.add((completeAnimationLevel) => {
			if (completeAnimationLevel) {
				_triggerNewAnimation(completeAnimationLevel);
			}
		});
	}

	function _triggerNewAnimation(animationStyle) {
		currentAnimationStyle = animationStyle;
	}

	function resetRatios() {
		successRatio = 0;
		towerRotationRatio = 0;
		floatingCoinsRatio = 0;
		floatingCubesRatio = 0;
		vortexCoinsRatio = 0;
		successPushDownRatio = 0;
		successColorTowerRatio = 0;
		floatingCubesDisplacement = 1;

		currentAnimationStyle = null;
	}

	function _updateRatios1() {
		floatingCubesDisplacement = 1;
		towerRotationRatio = 0;
		floatingCoinsRatio = 0;
		floatingCubesRatio = math.fit(successRatio, 0.2, 0.49, 0, 1.2);
		successPushDownRatio = math.fit(successRatio, 0.45, 0.55, 0, 1);
		successColorTowerRatio = math.fit(successRatio, 0.45, 0.7, 0, 1);
		vortexCoinsRatio = math.fit(successRatio, 0.55, 1, 0, 1);
	}

	function _updateRatios2() {
		floatingCubesDisplacement = 1.5;
		floatingCoinsRatio = 0;
		towerRotationRatio = math.fit(successRatio, 0.1, 0.45, 0, 1);
		floatingCubesRatio = math.fit(successRatio, 0.15, 0.49, 0, 1.2);
		successPushDownRatio = math.fit(successRatio, 0.45, 0.55, 0, 1);
		successColorTowerRatio = math.fit(successRatio, 0.45, 0.7, 0, 1);
		vortexCoinsRatio = math.fit(successRatio, 0.55, 1, 0, 1);
	}

	function _updateRatios3() {
		floatingCubesDisplacement = 2;
		towerRotationRatio = math.fit(successRatio, 0.1, 0.5, 0, 1);
		floatingCoinsRatio = math.fit(successRatio, 0.2, 0.51, 0, 1);
		floatingCubesRatio = math.fit(successRatio, 0.2, 0.49, 0, 1.2);
		successPushDownRatio = math.fit(successRatio, 0.45, 0.55, 0, 1);
		successColorTowerRatio = math.fit(successRatio, 0.45, 0.7, 0, 1);
		vortexCoinsRatio = math.fit(successRatio, 0.6, 1, 0, 1);
	}

	function update(dt: number) {
		successRatio += ((currentAnimationStyle ? 1 : 0) * dt) / successAnimationDuration;
		successRatio = math.clamp(successRatio, 0, 1);
		switch (currentAnimationStyle) {
			case 'ONE':
				_updateRatios1();
				break;
			case 'TWO':
				_updateRatios2();
				break;
			case 'THREE':
				_updateRatios3();
				break;
		}

		if (successRatio >= 1) {
			completeAnimationEndedSignal.dispatch();
			resetRatios();
		}
	}
	function getRatios() {
		return {
			successRatio,
			towerRotationRatio,
			floatingCoinsRatio,
			floatingCubesRatio,
			vortexCoinsRatio,
			successPushDownRatio,
			successColorTowerRatio,
			floatingCubesDisplacement,
		};
	}
	return {
		init,
		update,
		resetRatios,
		getRatios,
	};
};
