import { getControlDirection } from "./controls.js"

export const snake_speed = 4

const snakeBody = [{x: 10, y:10}]
let newSegments = 0


export function update() {
    addSegments()

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


export function snakeGrow(amount) {
    newSegments += amount
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(position1, position2){
    return position1.x === position2.x && position1.y === position2.y
}


function addSegments() {
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}