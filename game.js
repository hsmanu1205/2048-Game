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

// Move and merge functions
function moveLeft() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let row = grid[i].filter(val => val); // Remove zeros
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                score += row[j];
                row[j + 1] = 0;
            }
        }
        row = row.filter(val => val); // Remove zeros again
        while (row.length < 4) row.push(0);
        if (JSON.stringify(grid[i]) !== JSON.stringify(row)) moved = true;
        grid[i] = row;
    }
    if (moved) spawnTile();
    updateBoard();
}

function moveRight() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        let row = grid[i].filter(val => val);
        for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
                row[j] *= 2;
                score += row[j];
                row[j - 1] = 0;
            }
        }
        row = row.filter(val => val);
        while (row.length < 4) row.unshift(0);
        if (JSON.stringify(grid[i]) !== JSON.stringify(row)) moved = true;
        grid[i] = row;
    }
    if (moved) spawnTile();
    updateBoard();
}

function moveUp() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
        let col = [];
        for (let i = 0; i < 4; i++) col.push(grid[i][j]);
        col = col.filter(val => val);
        for (let i = 0; i < col.length - 1; i++) {
            if (col[i] === col[i + 1]) {
                col[i] *= 2;
                score += col[i];
                col[i + 1] = 0;
            }
        }
        col = col.filter(val => val);
        while (col.length < 4) col.push(0);
        for (let i = 0; i < 4; i++) {
            if (grid[i][j] !== col[i]) moved = true;
            grid[i][j] = col[i];
        }
    }
    if (moved) spawnTile();
    updateBoard();
}

function moveDown() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
        let col = [];
        for (let i = 0; i < 4; i++) col.push(grid[i][j]);
        col = col.filter(val => val);
        for (let i = col.length - 1; i > 0; i--) {
            if (col[i] === col[i - 1]) {
                col[i] *= 2;
                score += col[i];
                col[i - 1] = 0;
            }
        }
        col = col.filter(val => val);
        while (col.length < 4) col.unshift(0);
        for (let i = 0; i < 4; i++) {
            if (grid[i][j] !== col[i]) moved = true;
            grid[i][j] = col[i];
        }
    }
    if (moved) spawnTile();
    updateBoard();
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
