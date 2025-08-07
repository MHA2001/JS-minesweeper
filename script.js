// Display UI

import { createBoard, markTile } from './minesweeper.js';

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector('.board');
const minesLeftText = document.querySelector('[data-mine-count]');

renderBoard();
minesLeftText.innerText = NUMBER_OF_MINES;

function renderBoard() {
	board.forEach((row) => {
		row.forEach((tile) => {
			boardElement.append(tile.element);

			tile.element.addEventListener('contextmenu', (e) => {
				e.preventDefault();
				markTile(tile);
				listMinesLeft();
			});
		});
	});
	boardElement.style.setProperty('--size', BOARD_SIZE);
	minesLeftText.textContent = NUMBER_OF_MINES;
}
