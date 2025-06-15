# 🎮 [2048 Game](https://game-2048-harshit.netlify.app/)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</p>
A beautifully designed web implementation of the popular 2048 puzzle game. Combine numbered tiles by sliding them across the grid, aiming to create the elusive **2048 tile**!

[![Live Demo](https://img.shields.io/badge/Play_Now-Online-brightgreen?style=for-the-badge&logo=netlify)](https://game-2048-harshit.netlify.app/)

## ✨ Features

- ➡️ **Intuitive Sliding Mechanics** - Use arrow keys to move tiles (← → ↑ ↓)
- 📊 **Real-time Score Tracking** - Watch your progress grow
- 📱 **Fully Responsive Design** - Play on any device
- 🔄 **One-click Reset** - Instantly restart your game
- 🎨 **Beautiful Tile Design** - Color-coded tile system

## 🕹️ How to Play

1. Use your **keyboard arrow keys** to slide tiles
2. When two tiles with the **same number** touch, they **merge**!
3. After each move, a new tile (2 or 4) appears
4. **Goal**: Create a tile with the number **2048**
5. Game ends when the grid is full with no valid moves

![Game Controls](https://via.placeholder.com/400x200.png?text=Controls+Screenshot+Here)

## 🧩 Project Structure

```tree
2048-game/
│
├── index.html          # Main game interface
├── style.css           # Stylish tile designs & responsive layout
├── game.js             # Game logic & mechanics
├── assets/             # (Optional) For images/icons
│   └── tiles/          # Tile background images
└── README.md           # Project documentation
```

## ⚙️ Technical Implementation

### 🧱 HTML Structure
- Game grid container
- Score display panel
- Control buttons

### 🎨 CSS Design
- Responsive grid using CSS Flexbox/Grid
- Tile colors with gradient backgrounds
- Smooth animations for tile movements
- Media queries for mobile responsiveness

### 🤖 JavaScript Logic
```javascript
// Core functionality
initializeBoard();
handleKeyInput();
moveTiles(direction);
mergeTiles();
generateNewTile();
checkGameStatus();
```

## 🚀 Future Enhancements

- 🎉 **Win/Loss Overlays** - Visual celebration when reaching 2048
- ↩️ **Undo Move** - Step back one move (Ctrl+Z)
- 📈 **High Score Tracking** - Local storage persistence
- 🎥 **Tile Animation** - Smooth merging effects
- 🌓 **Dark Mode** - Eye-friendly color scheme
- 🔢 **Custom Grid Sizes** - 5x5 or 6x6 challenges

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributions

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Harshit**  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?style=flat&logo=github)](https://github.com/yourusername)

```

**To complete this enhanced README:**

1. **Add actual screenshots**:
   - Replace placeholder image URLs with actual screenshots
   - Recommended filenames:
     - `assets/screenshots/gameplay.png`
     - `assets/screenshots/controls.png`

2. **Add tile images** (optional but recommended):
   ```bash
   mkdir -p assets/tiles
   # Add 2.png, 4.png, 8.png, ... 2048.png in assets/tiles/
   ```

3. **Implementation suggestions**:
   - Use Google Fonts in CSS:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Montserrat:wght@800&display=swap');
     body { font-family: 'Roboto', sans-serif; }
     h1, h2, h3 { font-family: 'Montserrat', sans-serif; }
     ```
   - Add tile animations in CSS:
     ```css
     .tile {
       transition: all 0.15s ease;
       animation: appear 0.2s;
     }
     @keyframes appear {
       0% { transform: scale(0.5); opacity: 0; }
       100% { transform: scale(1); opacity: 1; }
     }
     ```

4. **Badge customization**:
   - Update GitHub profile URL in Author section
   - Add more badges from [shields.io](https://shields.io) if neede
