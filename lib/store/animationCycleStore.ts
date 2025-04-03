import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { SystemManagerState } from '../types/systemManager.ts';

interface Actions {
    reset: () => void;
    incCycleIndex: () => void;
}

type AnimationCycleState = SystemManagerState & Actions;

interface Ratios {
    animationSpeedRatio?: number;
    firstStartAnimationRatio?: number;
    previousSuccessBlocksAnimationRatio?: number;
}

const initialState: SystemManagerState = {
    blocks: [],
    firstStartAnimationRatio: 1,
    lastSpawnedBlock: null,
    cycleIndex: 0,
    animationSpeedRatio: 0,
    previousSuccessBlocksAnimationRatio: 0,
    activeBlocksCount: 0,
};

export const animationCycleStore = createStore<AnimationCycleState>()(
    subscribeWithSelector((set) => ({
        ...initialState,
        incCycleIndex: () => set((state) => ({ cycleIndex: state.cycleIndex + 1 })),
        reset: () => set((c) => ({ ...initialState, blocks: c.blocks })),
    }))
);

export const addBlock = (block) => animationCycleStore.setState((s) => ({ blocks: [block, ...s.blocks] }));

export const setLastSpawnedBlock = (block) => animationCycleStore.setState({ lastSpawnedBlock: block });

export const setAnimationRatios = ({ animationSpeedRatio, firstStartAnimationRatio, previousSuccessBlocksAnimationRatio }: Ratios) =>
    animationCycleStore.setState((curr) => ({
        animationSpeedRatio: animationSpeedRatio ?? curr.animationSpeedRatio,
        firstStartAnimationRatio: firstStartAnimationRatio ?? curr.firstStartAnimationRatio,
        previousSuccessBlocksAnimationRatio: previousSuccessBlocksAnimationRatio ?? curr.previousSuccessBlocksAnimationRatio,
    }));
