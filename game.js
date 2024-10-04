const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset-btn');

let grid;
let score = 0;

// Initialize game
function initializeGame() {
    grid = Array.from({ length: 4 }, () => Array(4).fill(0));
    spawnTile();
    spawnTile();
    updateBoard();
}

// Spawn new tile
function spawnTile() {
    let emptyTiles = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                emptyTiles.push({ x: i, y: j });
            }
        }
    }
    if (emptyTiles.length > 0) {
        const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        grid[randomTile.x][randomTile.y] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Update the game board display
function updateBoard() {
    gameBoard.innerHTML = '';
    grid.forEach(row => {
        row.forEach(value => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.textContent = value !== 0 ? value : '';
            tile.setAttribute('data-value', value);
            gameBoard.appendChild(tile);
        });
    });
    scoreDisplay.textContent = score;
}

// Handle tile movement (Left)
function moveLeft() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let newRow = grid[i].filter(num => num !== 0);
        for (let j = 0; j < newRow.length - 1; j++) {
            if (newRow[j] === newRow[j + 1]) {
                newRow[j] *= 2;
                score += newRow[j];
                newRow.splice(j + 1, 1);
            }
        }
        while (newRow.length < 4) {
            newRow.push(0);
        }
        if (newRow.toString() !== grid[i].toString()) moved = true;
        grid[i] = newRow;
    }
    if (moved) {
        spawnTile();
        updateBoard();
    }
}

// Similar logic can be applied for other directions
// moveRight(), moveUp(), moveDown()

// Handle key input
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft': moveLeft(); break;
        // Add other directions here
    }
});

// Reset game button
resetBtn.addEventListener('click', () => {
    score = 0;
    initializeGame();
});

// Start the game
initializeGame();
