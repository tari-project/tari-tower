import { properties } from '@core/properties';
import math from '@utils/math';
import { customEasing } from '@utils/ease';
import { isFree, isResult, isResultAnimation } from './stateManager';
export default class Block {
    constructor(id) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
        Object.defineProperty(this, "isMoving", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "hasBeenSpawned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "hasAnimationEnded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "hasBeenEvaluated", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "currentTile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "targetTile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "moveAnimationRatio", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "spawnAnimationRatio", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "spawnAnimationRatioUnclamped", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -Math.random()
        });
        Object.defineProperty(this, "easedAnimationRatio", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "randomVector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                x: Math.random() - 0.5,
                y: Math.random() - 0.5,
            }
        });
        Object.defineProperty(this, "lifeCycle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "easingFunction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "errorLifeCycle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "isErrorBlock", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "errorPreFallAnimationTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "errorPreFallAnimationTimeScale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "errorFallAnimationTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "isErrorBlockFalling", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "skipFallAnimation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
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
            if (tile.isOccupied || tile.willBeOccupied || tile.isMain)
                return false;
            return isFree || (this.currentTile?.priority ?? 0) >= tile.priority;
        });
    }
    moveToNextTile(isFree = false, animationDelay = 0) {
        this.hasBeenEvaluated = true;
        this.moveAnimationRatio = -animationDelay * (this.isErrorBlock ? 0 : 1);
        if (!this.currentTile)
            return;
        if (this.isErrorBlock) {
            this.isMoving = true;
            this.targetTile = this.currentTile;
            return;
        }
        this.currentTile.shuffleReachableNeighbours();
        const neighbours = isFree ? this.currentTile.reachableNeighbours : this.currentTile.prioritySortedReachableNeighbours;
        const bestTile = this._findBestTile(neighbours, isFree);
        if (bestTile && (!this.currentTile.isMain || Math.random() <= 0.8)) {
            this.targetTile = bestTile;
            if (this.targetTile) {
                this.targetTile.willBeOccupied = true;
            }
            this.isMoving = true;
        }
        else {
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
        if (this.isErrorBlock && !this.skipFallAnimation) {
            this.errorLifeCycle++;
            this.isErrorBlockFalling = this.errorLifeCycle >= properties.errorBlockMaxLifeCycle - 1;
        }
        if (this.currentTile?.isBorder && !properties.errorBlock && Math.random() < 0.5 && properties.activeBlocksCount >= properties.minSpawnedBlocksForTheErrorBlock && isFree) {
            properties.errorBlock = this;
            this.isErrorBlock = true;
        }
        this._setNewEasingFunction();
        this.updateTile();
    }
    reset(keepId = false) {
        if (this.isErrorBlock) {
            this.errorLifeCycle = 0;
            this.isErrorBlock = false;
            this.currentTile?.reset();
            this.targetTile?.reset();
            this.errorFallAnimationTime = 0;
            this.isErrorBlockFalling = false;
            this.errorPreFallAnimationTime = 0;
            this.errorPreFallAnimationTimeScale = 0;
            this.errorFallAnimationTime = 0;
            this.skipFallAnimation = false;
        }
        this.id = keepId ? this.id : -1;
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
    preventErrorBlockFallAnimation() {
        this.skipFallAnimation = true;
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
    _updateSpawnAnimation(dt) {
        this.spawnAnimationRatioUnclamped += 0.75 * properties.animationSpeed * dt;
        this.spawnAnimationRatio = Math.max(0, Math.min(1, this.spawnAnimationRatioUnclamped));
        if (this.spawnAnimationRatio === 1) {
            this.hasBeenSpawned = true;
        }
    }
    _updateMovement(dt) {
        if ((this.isMoving && !this.hasAnimationEnded) || isResultAnimation) {
            this.moveAnimationRatio = Math.min(1, this.moveAnimationRatio + properties.animationSpeed * dt * (this.isErrorBlock ? 0.7 : 1));
            this.easedAnimationRatio = this.easingFunction?.(Math.max(0, this.moveAnimationRatio)) || 0;
            if (this.easedAnimationRatio === 1 && (isFree || isResult)) {
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
        if (this.isErrorBlock && this.isErrorBlockFalling) {
            if (this.currentTile) {
                this.currentTile.activeRatio = 0;
            }
            if (this.targetTile) {
                this.targetTile.activeRatio = 0;
            }
        }
    }
    update(dt) {
        if (!this.hasBeenSpawned) {
            this._updateSpawnAnimation(dt);
        }
        else {
            this._updateMovement(dt);
        }
        if (this.isErrorBlockFalling) {
            this.errorFallAnimationTime = this.errorFallAnimationTime + 3 * properties.animationSpeed * dt;
        }
        if (this.isErrorBlock) {
            this.errorPreFallAnimationTimeScale = this.errorPreFallAnimationTimeScale + 3 * dt;
            this.errorPreFallAnimationTimeScale = Math.min(20, this.errorPreFallAnimationTimeScale);
            this.errorPreFallAnimationTime = this.errorPreFallAnimationTime + this.errorPreFallAnimationTimeScale * dt;
            if (this.skipFallAnimation) {
                this.errorPreFallAnimationTime = 0;
                this.errorPreFallAnimationTimeScale = 0;
            }
        }
        this._updateTileRatios();
    }
}
