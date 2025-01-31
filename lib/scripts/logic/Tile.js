import { HALF_SIZE } from './board';
const getDistance = (row, col) => Math.hypot(row, col);
export default class Tile {
    constructor(id = 0, row = 0, col = 0) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "row", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "col", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "distance", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: getDistance(this.row, this.col)
        });
        Object.defineProperty(this, "MAX_DISTANCE", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: getDistance(HALF_SIZE, HALF_SIZE)
        });
        Object.defineProperty(this, "priority", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.MAX_DISTANCE - this.distance
        });
        Object.defineProperty(this, "isMain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.row === 0 && this.col === 0
        });
        Object.defineProperty(this, "isBorder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Math.abs(this.row) === 2 || Math.abs(this.col) === 2
        });
        Object.defineProperty(this, "isOccupied", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "willBeOccupied", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "activeRatio", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "neighbours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "reachableNeighbours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "prioritySortedReachableNeighbours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "randomDelay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5
        });
        Object.defineProperty(this, "loseAnimationPositionArray", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "loseAnimationOrientArray", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.id = id;
        this.row = row;
        this.col = col;
        this.distance = getDistance(row, col);
        this.MAX_DISTANCE = getDistance(HALF_SIZE, HALF_SIZE);
        this.priority = this.MAX_DISTANCE - this.distance;
        this.isMain = row === 0 && col === 0;
        this.isBorder = Math.abs(row) === 2 || Math.abs(col) === 2;
        this.isOccupied = false;
        this.willBeOccupied = false;
        this.activeRatio = 0;
        this.neighbours = null;
        this.reachableNeighbours = null;
        this.prioritySortedReachableNeighbours = null;
        this.randomDelay = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
    }
    init() {
        this.reachableNeighbours = this.neighbours?.filter((neighbour) => neighbour?.row === this.row || neighbour?.col === this.col) || null;
        this._sortPriorityNeighbours();
    }
    _sortPriorityNeighbours() {
        this.prioritySortedReachableNeighbours = this.reachableNeighbours ? [...this.reachableNeighbours].sort((a, b) => (a?.priority || 0) - (b?.priority || 0)) : null;
    }
    shuffleReachableNeighbours() {
        if (this.reachableNeighbours) {
            for (let i = this.reachableNeighbours.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.reachableNeighbours[i], this.reachableNeighbours[j]] = [this.reachableNeighbours[j], this.reachableNeighbours[i]];
            }
        }
        this._sortPriorityNeighbours();
    }
    preUpdate(_dt) {
        this.activeRatio = 0;
    }
    reset() {
        this.isOccupied = false;
        this.willBeOccupied = false;
        this.activeRatio = 0;
    }
    update(_dt) {
        // TODO: check this update flow
    }
}
