# Minesweeper

A classic Minesweeper game implemented from scratch using vanilla JavaScript, HTML, and CSS.

---

## Purpose of the Project
This project was a personal challenge to recreate the classic Minesweeper game. The goal was to build a fully functional and interactive game that demonstrates core front-end development skills, including game logic, user interface updates, and state management without any external libraries.

## Technology Stack
-   **Front-End:** Vanilla JavaScript (ES6+), HTML5, CSS3

## Features
-   A dynamically generated game board with a customizable size and number of mines.
-   Left-click to reveal a tile.
-   Right-click to mark a potential mine with a flag.
-   Displays the number of remaining mines.
-   Automatic reveal of adjacent empty tiles when a tile with zero surrounding mines is revealed.
-   Clear win and lose conditions with visual feedback.

---

## Learning Goals
This project was focused on learning and applying several key programming and front-end concepts:

* **Game Logic:** I learned to create the core game logic, including generating a board, placing mines randomly, and calculating the number of adjacent mines for each tile.
* **DOM Manipulation:** I practiced creating and updating the game board dynamically in JavaScript. Each tile is a `div` element, and I learned to manage their state (`hidden`, `marked`, `number`, `mine`) using `dataset` attributes.
* **Event Handling:** I implemented event listeners for both `click` and `contextmenu` (right-click) events on the tiles to handle revealing and marking actions. I also learned to prevent the default context menu behavior for a better user experience.
* **Recursive Functions:** To implement the "auto-reveal" feature when a zero-mine tile is clicked, I used a recursive function (`revealTile`) that checks and reveals neighboring tiles.
* **State Management:** I managed the entire game state, including the board data, mine count, and win/lose conditions, directly in JavaScript.

---

## Workflow
1.  **HTML and CSS Setup:** I created the basic HTML structure for the game title, mine counter, and the game board container. The CSS was written to style the board as a grid and to visually represent the different tile states.
2.  **Board Creation:** I wrote a JavaScript function (`createBoard`) to generate a 2D array representing the game board, populating it with tile objects that contain their coordinates, mine status, and a reference to their corresponding DOM element.
3.  **Mine Placement and Number Calculation:** I created a helper function (`getMinePositions`) to randomly place a specified number of mines on the board. Then, I wrote logic to calculate and store the number of adjacent mines for each non-mine tile.
4.  **User Interaction:** I added event listeners to each tile to handle user input. Left-clicks trigger the `revealTile` function, and right-clicks toggle the `marked` status of a tile.
5.  **Game End Logic:** I implemented functions to check for win (`checkWin`) and lose (`checkLose`) conditions after each move and provide a clear message to the user when the game is over.

---

## Important Decisions
* **Separation of Logic and UI:** I made a conscious decision to separate the core game logic (`minesweeper.js`) from the UI-related code (`script.js`). This modular approach makes the code easier to read, test, and maintain. For example, the `minesweeper.js` file can be reused for a different UI without any changes.
* **Using `dataset` attributes:** Instead of managing CSS classes directly, I used `data-status` attributes on each tile element. This is a clean and efficient way to represent the state of each tile and apply styles based on that state via CSS attribute selectors (`.board > [data-status="hidden"]`).

---

## Problems & Solutions

### Roadblock: Right-click was showing the browser's context menu.
* **Problem:** When a user right-clicked a tile to place a flag, the browser's default context menu would appear, interrupting the game.
* **Solution:** I used `e.preventDefault()` inside the `contextmenu` event listener. This prevented the default browser behavior and allowed the application to handle the right-click event exclusively for game purposes.

---

## Future Enhancements
* Add a difficulty selection (Easy, Medium, Hard) to change the board size and mine count.
* Implement a timer to track how long it takes a user to complete the game.
* Add a reset button to start a new game.
* Improve the visual design with better fonts, colors, and more polished tile graphics.

---
