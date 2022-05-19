import {update as updateSnake, draw as drawSnake, snake_speed} from './snake.js'
import { update as updateApple, draw as drawApple, } from './apple.js'

let lastRenderTime = 0
const snakegame = document.getElementById('snake-game')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snake_speed) return
    
 
    lastRenderTime = currentTime

    update()
    draw()
    
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateApple()
}

function draw() {
    snakegame.innerHTML = ''
    drawSnake(snakegame)
    drawApple(snakegame)
}