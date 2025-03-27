import math from '../utils/math';
import { AnimationResult, AnimationStatus } from '../../types/stateManager';
import { stateManagerStore } from '../../store/stateManagerStore';

let isActive = false;
let stopRatio = 0;
const stopAnimationDuration = 2.5; // seconds
let stopSpawnRatio = 0;
let stopPushDownRatio = 0;

const StopAnimationManager = () => {
    function init() {
        const listen: Parameters<typeof stateManagerStore.subscribe>[0] = ({ status, result }) => {
            if (status === AnimationStatus.RESULT && result === AnimationResult.STOP) {
                isActive = true;
            }
        };
        stateManagerStore.subscribe((state) => state, listen);
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
            stateManagerStore.getState().setAnimationTypeEnded('stop');
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
export { stopAnimationManager, stopSpawnRatio, stopPushDownRatio, stopAnimationDuration };
