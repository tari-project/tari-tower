import { HALF_SIZE } from './board';

const getDistance = (row, col) => Math.hypot(row, col);

export default class Tile {
	id = 0;
	row = 0;
	col = 0;
	distance: number = getDistance(this.row, this.col);
	MAX_DISTANCE: number = getDistance(HALF_SIZE, HALF_SIZE);
	priority: number = this.MAX_DISTANCE - this.distance;
	isMain: boolean = this.row === 0 && this.col === 0;
	isBorder: boolean = Math.abs(this.row) === 2 || Math.abs(this.col) === 2;
	isOccupied = false;
	willBeOccupied = false;
	activeRatio = 0;
	neighbours: (Tile | null)[] | null = null;
	reachableNeighbours: (Tile | null)[] | null = null;
	prioritySortedReachableNeighbours: (Tile | null)[] | null = null;
	randomDelay: number = Math.random() * 0.5 + (this.MAX_DISTANCE - this.priority) * 0.5;
	loseAnimationPositionArray: Float32Array<ArrayBuffer> = [] as unknown as Float32Array<ArrayBuffer>;
	loseAnimationOrientArray: Float32Array<ArrayBuffer> = [] as unknown as Float32Array<ArrayBuffer>;

	constructor(id = 0, row = 0, col = 0) {
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

	preUpdate(_dt: number) {
		this.activeRatio = 0;
	}

	reset() {
		this.isOccupied = false;
		this.willBeOccupied = false;
		this.activeRatio = 0;
	}

	update(_dt: number) {
		// TODO: check this update flow
	}
}
