// Display UI

import { createBoard, markTile } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector('.board');
const mineLestText = document.querySelector('[data-mine-count]');

boardElement.addEventListener('contextmenu', (e) => {
	e.preventDefault();
	if (!e.target.matches('div[data-status]')) return;
	const tile = e.target;
	const x = Number(tile.dataset.xLocation);
	const y = Number(tile.dataset.yLocation);
	markTile({ x, y }, e.target);
});

renderBoard(BOARD_SIZE);
mineLestText.innerText = NUMBER_OF_MINES;

function renderBoard(size) {
	boardElement.style.setProperty('--size', BOARD_SIZE);

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const tile = document.createElement('div');
			tile.dataset.status = 'hidden';
			tile.dataset.xLocation = i;
			tile.dataset.yLocation = j;
			boardElement.appendChild(tile);
		}
	}
}
