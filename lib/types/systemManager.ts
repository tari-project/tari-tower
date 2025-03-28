import Block from '../scripts/logic/Block';

export interface SystemManagerState {
    firstStartAnimationRatio: number;
    activeBlocksCount: number;
    blocks: Block[];
    lastSpawnedBlock?: Block | null;
    cycleIndex: number;
    animationSpeedRatio: number;
    previousSuccessBlocksAnimationRatio: number;
}
