# Colonist io challenge / test game - creating ping pong game by template

Video showcasing game: https://youtu.be/uqZQYdppbQ0

## Before Starting
- Forked repository
- Created a new branch
- Attempted using best practices

## Template

- Used `onInit` and `onUpdate`
- Used ```this.nodes.push(nodeProperties)``` to add nodes to canvas.
- Used ```this.getNode()``` to get node properties.

## Todo
- Made game cover the whole browser by increasing canvas size
- Added keyboard functionalities for both players, W and S for one player, Up and Down for another player.
- Can move players (pong paddles) with keyboard
- Added ball to the game
- Pressing ```SPACE``` starts and pauses game
- Ball bounces from boundaries
- When player scores, shows scoring with console.log. And resets game.

## Bonus Todo
- Added draw text functionality to the engine. You can modify app.js for that part.
- Add score system for the game and use this drawText functionality on game.
- Add resize function the engine. With window.resize
- Made the ball round /w round collision detection
- Included app.reset() and app.pause() functions

## How To Run The App
With node/NPM installed, from the command line "npm i" to install dependencies and execute "node index.js"
