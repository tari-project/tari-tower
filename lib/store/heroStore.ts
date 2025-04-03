import { createStore } from 'zustand/vanilla';
import { HeroType } from '../types/hero.ts';
import { TOTAL_TILES } from '../scripts/logic/board.ts';
import HeroBlockCoordinates from '../scripts/visuals/hero/HeroBlockCoordinates.ts';
import { subscribeWithSelector } from 'zustand/middleware';

export const TOTAL_BLOCKS = 2 * TOTAL_TILES;

type State = HeroType;
interface Actions {
    setPreloadItems: (items: Partial<State>) => void;
}
type HeroState = State & Actions;

const blockListInitial = Array.from({ length: TOTAL_BLOCKS }).map((_, i) => new HeroBlockCoordinates(i));

const initialState: State = {
    animationTotalFrames: 0,
    blockList: blockListInitial,
    blockRenderList: [...blockListInitial],
    heroLoseAnimationOrientArray: undefined,
    heroLoseAnimationPositionArray: undefined,
    isShadowCameraHelperVisible: undefined,
    shadowCameraHelper: undefined,
    successColorRatio: 0,
    instance: {
        instanceColorArray: undefined,
        instanceIsActiveArray: undefined,
        instanceNextDirectionArray: undefined,
        instanceOrientArray: undefined,
        instancePosArray: undefined,
        instanceShowRatioArray: undefined,
        instanceSpinOrientArray: undefined,
        instanceSpinPivotArray: undefined,
    },
};

export const heroStore = createStore<HeroState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
        setPreloadItems: (preloadItems: Partial<HeroState>) => set({ ...preloadItems }),
    }))
);
