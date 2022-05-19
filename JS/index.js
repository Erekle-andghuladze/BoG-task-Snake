import {update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeSuicide} from './snake.js'
import { update as updateApple, draw as drawApple, } from './apple.js'
import { outsideGrid} from './randomizer.js'

let lastRenderTime = 0
let gameOver = false
const snakegame = document.getElementById('snake-game')

function main(currentTime) {
    if(gameOver){
        return alert('Game Over')
    }

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
    checkDeath()
}

function draw() {
    snakegame.innerHTML = ''
    drawSnake(snakegame)
    drawApple(snakegame)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeSuicide()
}