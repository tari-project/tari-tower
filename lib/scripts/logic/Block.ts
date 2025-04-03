import math from '../utils/math';
import { customEasing } from '../utils/ease';
import { BlockType } from '../../types/block';
import { ANIMATION_SPEED } from '../core/settings.ts';

import { stateManagerStore } from '../../store/stateManagerStore.ts';

export default class Block {
    id: BlockType['id'] = -1;
    isMoving: BlockType['isMoving'] = false;
    hasBeenSpawned: BlockType['hasBeenSpawned'] = false;
    hasAnimationEnded: BlockType['hasAnimationEnded'] = false;
    hasBeenEvaluated: BlockType['hasBeenEvaluated'] = false;
    currentTile: BlockType['currentTile'] = null;
    targetTile: BlockType['targetTile'] = null;
    moveAnimationRatio: BlockType['moveAnimationRatio'] = 0;
    spawnAnimationRatio: BlockType['spawnAnimationRatio'] = 0;
    spawnAnimationRatioUnclamped: BlockType['spawnAnimationRatioUnclamped'] = -Math.random();
    easedAnimationRatio: BlockType['easedAnimationRatio'] = 0;

    randomVector: BlockType['randomVector'] = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
    };

    lifeCycle: BlockType['lifeCycle'] = 0;
    easingFunction: BlockType['easingFunction'] = null;

    constructor(id) {
        this.id = id;
        this.init();
    }

    init() {
        this._setNewEasingFunction();
    }

    _setNewEasingFunction() {
        const rand = Math.random();
        const thresh = 0.25;
        this.easingFunction = (x) => customEasing(math.fit(x, rand * thresh, rand * thresh + (1 - thresh), 0, 1));
    }

    updateTile() {
        if (this.currentTile) {
            this.currentTile.isOccupied = true;
            this.currentTile.willBeOccupied = false;
        }
    }

    _findBestTile(neighbours, isFree) {
        return neighbours.find((tile) => {
            if (tile.isOccupied || tile.willBeOccupied || tile.isMain) return false;
            return isFree || (this.currentTile?.priority ?? 0) >= tile.priority;
        });
    }

    moveToNextTile(isFree = false, animationDelay = 0) {
        this.hasBeenEvaluated = true;
        this.moveAnimationRatio = -animationDelay;

        if (!this.currentTile) return;

        this.currentTile.shuffleReachableNeighbours();
        const neighbours = isFree ? this.currentTile.reachableNeighbours : this.currentTile.prioritySortedReachableNeighbours;

        const bestTile = this._findBestTile(neighbours, isFree);

        if (bestTile && (!this.currentTile.isMain || Math.random() <= 0.8)) {
            this.targetTile = bestTile;
            if (this.targetTile) {
                this.targetTile.willBeOccupied = true;
            }
            this.isMoving = true;
        } else {
            this.hasAnimationEnded = true;
        }
    }

    resetAfterCycle() {
        this.hasBeenEvaluated = false;
        this.hasAnimationEnded = false;
        this.moveAnimationRatio = 0;
        this.easedAnimationRatio = 0;

        this.isMoving = false;
        this.lifeCycle++;

        this._setNewEasingFunction();
        this.updateTile();
    }

    reset() {
        this.id = -1;
        this.isMoving = false;
        this.hasBeenSpawned = false;
        this.hasAnimationEnded = false;
        this.hasBeenEvaluated = false;
        this.currentTile = null;
        this.targetTile = null;
        this.moveAnimationRatio = 0;
        this.spawnAnimationRatio = 0;
        this.spawnAnimationRatioUnclamped = -Math.random();
        this.easedAnimationRatio = 0;
        this.lifeCycle = 0;
    }
    _onMovementEnd() {
        this.moveAnimationRatio = 1;

        if (this.currentTile) {
            this.currentTile.isOccupied = false;
        }
        this.currentTile = this.targetTile;
        this.targetTile = null;

        this.hasAnimationEnded = true;

        this.updateTile();
    }

    _updateSpawnAnimation(dt: number) {
        this.spawnAnimationRatioUnclamped += 0.75 * ANIMATION_SPEED * dt;
        this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped));

        if (this.spawnAnimationRatio === 1) {
            this.hasBeenSpawned = true;
        }
    }

    _updateMovement(dt: number) {
        if ((this.isMoving && !this.hasAnimationEnded) || stateManagerStore.getState().flags.isResultAnimation) {
            this.moveAnimationRatio = Math.min(1, this.moveAnimationRatio + ANIMATION_SPEED * dt * 0.95);
            this.easedAnimationRatio = this.easingFunction?.(Math.max(0, this.moveAnimationRatio)) || 0;

            if (this.easedAnimationRatio === 1 && (stateManagerStore.getState().flags.isFree || stateManagerStore.getState().flags.isResult)) {
                this._onMovementEnd();
            }
        }
    }

    _updateTileRatios() {
        const clampedMoveAnimationRatio = Math.max(0, Math.min(1, this.hasBeenSpawned ? this.easedAnimationRatio : this.spawnAnimationRatio));

        if (this.currentTile) {
            this.currentTile.activeRatio = this.hasBeenSpawned ? (this.targetTile ? 1 - clampedMoveAnimationRatio : 1) : this.spawnAnimationRatio;
        }
        if (this.targetTile) {
            this.targetTile.activeRatio = clampedMoveAnimationRatio;
        }
    }

    update(dt: number) {
        if (!this.hasBeenSpawned) {
            this._updateSpawnAnimation(dt);
        } else {
            this._updateMovement(dt);
        }

        this._updateTileRatios();
    }
}
