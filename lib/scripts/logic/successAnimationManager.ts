import math from '../utils/math';
import { AnimationResult, AnimationStatus, SuccessLevel } from '../../types/stateManager';
import { stateManagerStore } from '../../store/stateManagerStore';

let currentAnimationStyle: SuccessLevel | null;
let successRatio = 0;
const successAnimationDuration = 6; // seconds
let towerRotationRatio = 0;
let floatingCoinsRatio = 0;
let floatingCubesRatio = 0;
let vortexCoinsRatio = 0;
let successPushDownRatio = 0;
let successColorTowerRatio = 0;
let floatingCubesDisplacement = 1;

const SuccessAnimationManager = () => {
    function init() {
        const listen: Parameters<typeof stateManagerStore.subscribe>[0] = ({
            status,
            result,
            completeAnimationLevel,
        }) => {
            if (
                status === AnimationStatus.RESULT &&
                (result === AnimationResult.COMPLETED || result === AnimationResult.REPLAY)
            ) {
                _triggerNewAnimation(completeAnimationLevel);
            }
        };
        stateManagerStore.subscribe((state) => state, listen);
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
            case SuccessLevel.ONE:
                _updateRatios1();
                break;
            case SuccessLevel.TWO:
                _updateRatios2();
                break;
            case SuccessLevel.THREE:
                _updateRatios3();
                break;
        }

        if (successRatio >= 1) {
            stateManagerStore.getState().setAnimationTypeEnded('win');
            resetRatios();
        }
    }

    return {
        init,
        update,
        resetRatios,
    };
};

const successAnimationManager = SuccessAnimationManager();
export {
    successAnimationManager,
    successRatio,
    towerRotationRatio,
    floatingCoinsRatio,
    floatingCubesRatio,
    vortexCoinsRatio,
    successPushDownRatio,
    successColorTowerRatio,
    floatingCubesDisplacement,
};
