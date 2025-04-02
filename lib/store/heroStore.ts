import { createStore } from 'zustand/vanilla';
import { HeroType } from '../types/hero.ts';
import { TOTAL_TILES } from '../scripts/logic/board.ts';
import HeroBlockCoordinates from '../scripts/visuals/hero/HeroBlockCoordinates.ts';

export const TOTAL_BLOCKS = 2 * TOTAL_TILES;

type State = HeroType;
interface Actions {
    setPreloadItems: (items: Partial<State>) => void;
    setInstanceItems: (items: Partial<State>) => void;
    setBaseMesh: (baseMesh: HeroType['baseMesh']) => void;
    setBlocksMesh: (blocksMesh: HeroType['blocksMesh']) => void;
}
type HeroState = State & Actions;

const blockListInitial = Array.from({ length: TOTAL_BLOCKS }).map((_) => new HeroBlockCoordinates());
const initialState: State = {
    animationTotalFrames: 0,
    baseMesh: undefined,
    blockList: blockListInitial,
    blockRenderList: blockListInitial,
    blocksMesh: undefined,
    directLight: undefined,
    heroLoseAnimationOrientArray: undefined,
    heroLoseAnimationPositionArray: undefined,
    infoTexture: undefined,
    infoTextureLinear: undefined,
    instanceColorArray: undefined,
    instanceIsActiveArray: undefined,
    instanceNextDirectionArray: undefined,
    instanceOrientArray: undefined,
    instancePosArray: undefined,
    instanceShowRatioArray: undefined,
    instanceSpinOrientArray: undefined,
    instanceSpinPivotArray: undefined,
    isShadowCameraHelperVisible: undefined,
    shadowCameraHelper: undefined,
    successColorRatio: 0,
};

export const heroStore = createStore<HeroState>()((set) => ({
    ...initialState,
    setPreloadItems: (preloadItems: Partial<HeroState>) => set({ ...preloadItems }),
    setBaseMesh: (baseMesh: HeroType['baseMesh']) => set({ baseMesh }),
    setBlocksMesh: (blocksMesh: HeroType['blocksMesh']) => set({ blocksMesh }),
    setInstanceItems: (instanceItems: Partial<HeroState>) => set({ ...instanceItems }),
}));
