import Tile from './Tile';

export const SIZE = 5;
export const SIZE_WITH_PADDING = SIZE + 2;
export const HALF_SIZE = Math.floor(SIZE / 2);
export const TOTAL_TILES = SIZE * SIZE;
export const TOTAL_TILES_WITH_PADDING = SIZE_WITH_PADDING * SIZE_WITH_PADDING;

export const Board = () => {
	let mainTile: Tile | null = null;
	let tiles: Tile[][] = [];
	function init() {
		tiles = Array.from({ length: SIZE }, (_, i) =>
			Array.from({ length: SIZE }, (_, j) => {
				const row = i - HALF_SIZE;
				const col = j - HALF_SIZE;
				return new Tile(i * SIZE + j, row, col);
			}),
		);

		tiles.forEach((row, i) =>
			row.forEach((tile, j) => {
				tile.neighbours = _getNeighbouringTiles(i - HALF_SIZE, j - HALF_SIZE);
				tile.init();
			}),
		);

		mainTile = getTile(0, 0);
	}

	function getTile(row, col) {
		return tiles[row + HALF_SIZE]?.[col + HALF_SIZE] || null;
	}

	function getRandomFreeTile() {
		const freeTiles = tiles.flat().filter((tile) => !tile.isOccupied);
		return freeTiles.length ? freeTiles[Math.floor(Math.random() * freeTiles.length)] : null;
	}

	function _getNeighbouringTiles(row, col) {
		return [-1, 0, 1].flatMap((i) =>
			[-1, 0, 1]
				.map((j) => {
					if (i === 0 && j === 0) return null;
					return getTile(row + i, col + j);
				})
				.filter(Boolean),
		);
	}

	function reset() {
		tiles.flat().forEach((tile) => tile.reset());
	}

	function preUpdate(dt: number) {
		tiles.flat().forEach((tile) => tile.preUpdate(dt));
	}

	function update(dt: number) {
		tiles.flat().forEach((tile) => tile.update(dt));
	}

	function getMainTile() {
		return mainTile;
	}

	function getTiles() {
		return tiles;
	}

	return {
		init,
		getTile,
		getRandomFreeTile,
		reset,
		preUpdate,
		update,
		getMainTile,
		getTiles,
	};
};
