import { onSnake, snakeGrow } from './snake.js'
import { randomGridPos } from './randomizer.js'

let apple = getRandomPos()
const snake_growth = 1

export function update() {
    if (onSnake(apple)){
        snakeGrow(snake_growth)
        apple = getRandomPos()
    }
}

export function draw(snakegame) {
    
        const appleElement = document.createElement('div')
        appleElement.style.gridRowStart = apple.y
        appleElement.style.gridColumnStart = apple.x
        appleElement.classList.add('apple')
        snakegame.appendChild(appleElement)
    
}


function getRandomPos() {
    let newApplePos
    while (newApplePos == null || onSnake(newApplePos)) {
        newApplePos = randomGridPos()
    }
    return newApplePos
}