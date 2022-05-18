import { getControlDirection } from "./controls.js"

export const snake_speed = 1

const snakeBody = [{x: 10, y:10}]


export function update() {
    const controlDirection = getControlDirection()
    for (let i = snakeBody.length - 2; i >=0; i--){
        snakeBody[i+1] = { ...snakeBody[i]}
    }

    snakeBody[0].x += controlDirection.x
    snakeBody[0].y += controlDirection.y
}

export function draw(snakegame) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        snakegame.appendChild(snakeElement)
    })
}