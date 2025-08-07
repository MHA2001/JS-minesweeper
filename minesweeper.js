// logic

const TILE_STATUSES = {
	HIDDEN: 'hidden',
	MINE: 'mine',
	NUMBER: 'number',
	MARKED: 'marked',
};
let boardData;
export function createBoard(boardSize, numberOfMines) {
	const minesPositions = getMinPositions(boardSize, numberOfMines);

	boardData = Array.from({ length: boardSize }, (_, i) =>
		Array.from({ length: boardSize }, (_, j) => ({
			x: i,
			y: j,
			status: 'hidden',
			number: 0,
		}))
	);

	minesPositions.forEach((mine) => {
		const x = mine.x;
		const y = mine.y;
		boardData[x][y].status = 'mine';
		boardData[x][y].number = -1;
	});

	return boardData;
}

export function markTile(tile, element) {
	const status = boardData[tile.x][tile.y].status;
	console.log(status);
	if (status !== TILE_STATUSES.HIDDEN && status !== TILE_STATUSES.MARKED)
		return;
	if (status === TILE_STATUSES.MARKED) {
		boardData[tile.x][tile.y].status = TILE_STATUSES.HIDDEN;
		element.dataset.status = TILE_STATUSES.HIDDEN;
	} else {
		boardData[tile.x][tile.y].status = TILE_STATUSES.MARKED;
		element.dataset.status = TILE_STATUSES.MARKED;
	}
}

function getMinPositions(size, numberOfMines) {
	const positions = [];
	while (positions.length < numberOfMines) {
		const position = {
			x: randomNumber(size),
			y: randomNumber(size),
		};
		if (!positions.some((p) => positionsMatch(p, position))) {
			positions.push(position);
		}
	}

	return positions;
}

function positionsMatch(a, b) {
	return a.x === b.x && a.y === b.y;
}

function randomNumber(size) {
	return Math.floor(Math.random() * size);
}
