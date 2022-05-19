import { onSnake, snakeGrow } from './snake.js'


let apple = { x: 10, y: 1 }
const snake_growth = 1

export function update() {
    if (onSnake(apple)){
        snakeGrow(snake_growth)
        apple = {x:15, y:15}
    }
}

export function draw(snakegame) {
    
        const appleElement = document.createElement('div')
        appleElement.style.gridRowStart = apple.y
        appleElement.style.gridColumnStart = apple.x
        appleElement.classList.add('apple')
        snakegame.appendChild(appleElement)
    
}