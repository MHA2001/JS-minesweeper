// Display UI

import { createBoard } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector('.board');
renderBoard(BOARD_SIZE);
console.log(board);
function renderBoard(size) {
	boardElement.style.setProperty('--size', BOARD_SIZE);

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const square = document.createElement('div');
			square.dataset.status = 'hidden';
			square.dataset.xLocation = i;
			square.dataset.yLocation = j;
			boardElement.appendChild(square);
		}
	}
}
