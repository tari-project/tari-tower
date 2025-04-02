import { IBlock } from './block.ts';

export interface SystemManagerState {
    firstStartAnimationRatio: number;
    activeBlocksCount: number;
    blocks: IBlock[];
    lastSpawnedBlock?: IBlock | null;
    cycleIndex: number;
    animationSpeedRatio: number;
    previousSuccessBlocksAnimationRatio: number;
}
