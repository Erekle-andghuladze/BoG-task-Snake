import {update as updateSnake, draw as drawSnake, snake_speed} from './snake.js'

let lastRenderTime = 0

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snake_speed) return
    
    console.log('render')
    lastRenderTime = currentTime
    
}

window.requestAnimationFrame(main)

const gameBoard = document.getElementById('snake-game')

function update() {
    updateSnake()

}

function draw() {
    drawSnake(snakegame)
}