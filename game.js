const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset-btn');

let grid;
let score = 0;

// Initialize game
function initializeGame() {
    grid = Array.from({ length: 4 }, () => Array(4).fill(0));
    score = 0;
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

// Move Left
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

// Move Right
function moveRight() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let newRow = grid[i].filter(num => num !== 0);
        for (let j = newRow.length - 1; j > 0; j--) {
            if (newRow[j] === newRow[j - 1]) {
                newRow[j] *= 2;
                score += newRow[j];
                newRow.splice(j - 1, 1);
            }
        }
        while (newRow.length < 4) {
            newRow.unshift(0);
        }
        if (newRow.toString() !== grid[i].toString()) moved = true;
        grid[i] = newRow;
    }
    if (moved) {
        spawnTile();
        updateBoard();
    }
}

// Move Up
function moveUp() {
    let moved = false;
    for (let col = 0; col < 4; col++) {
        let newColumn = [];
        for (let row = 0; row < 4; row++) {
            if (grid[row][col] !== 0) {
                newColumn.push(grid[row][col]);
            }
        }
        for (let i = 0; i < newColumn.length - 1; i++) {
            if (newColumn[i] === newColumn[i + 1]) {
                newColumn[i] *= 2;
                score += newColumn[i];
                newColumn.splice(i + 1, 1);
            }
        }
        while (newColumn.length < 4) {
            newColumn.push(0);
        }
        for (let row = 0; row < 4; row++) {
            if (grid[row][col] !== newColumn[row]) moved = true;
            grid[row][col] = newColumn[row];
        }
    }
    if (moved) {
        spawnTile();
        updateBoard();
    }
}

// Move Down
function moveDown() {
    let moved = false;
    for (let col = 0; col < 4; col++) {
        let newColumn = [];
        for (let row = 0; row < 4; row++) {
            if (grid[row][col] !== 0) {
                newColumn.push(grid[row][col]);
            }
        }
        for (let i = newColumn.length - 1; i > 0; i--) {
            if (newColumn[i] === newColumn[i - 1]) {
                newColumn[i] *= 2;
                score += newColumn[i];
                newColumn.splice(i - 1, 1);
            }
        }
        while (newColumn.length < 4) {
            newColumn.unshift(0);
        }
        for (let row = 0; row < 4; row++) {
            if (grid[row][col] !== newColumn[row]) moved = true;
            grid[row][col] = newColumn[row];
        }
    }
    if (moved) {
        spawnTile();
        updateBoard();
    }
}

// Handle key input
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft': moveLeft(); break;
        case 'ArrowRight': moveRight(); break;
        case 'ArrowUp': moveUp(); break;
        case 'ArrowDown': moveDown(); break;
    }
});

// Reset game button
resetBtn.addEventListener('click', () => {
    initializeGame();
});

// Start the game
initializeGame();
