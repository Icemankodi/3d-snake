# 3D Snake (Three.js)
Cartoon-styled 3D Snake with toon shading, squash & stretch, double-chomp, random board + food colors, power-ups, high score, retro music, swipe & virtual joystick.

**Play:** open `index.html` locally or via GitHub Pages.  
**Controls:** WASD / Arrow Keys · P = Pause · R = Restart · Menu for Difficulty, Walls, Overhead view, SFX & Music.

## Features
- ✨ Toon materials + animated head (eyes, tongue, jaw)
- 🟢 Power-ups: Slow-mo, Ghost, ×2 Points
- 🍬 Random food colors, randomized board palette
- 🐍 Snake grows by 1 per food
- 🎵 Retro 16-bit-style background loop (toggle in menu)
- 📱 Mobile: swipe on canvas + virtual joystick
- 💾 Local high score (localStorage)
- 🔧 Difficulty + wall wrap modes

## Dev
Single-file build:
- `index.html` (includes everything)
- Library: Three.js via CDN
- No bundler required

### Run locally
Just open `index.html` in a browser.
For a local server (optional):
```bash
python3 -m http.server 8080
# then open http://localhost:8080
