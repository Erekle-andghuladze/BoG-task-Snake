let apple = { x: 0, y: 0 }


export function update() {
    
}

export function draw(snakegame) {
    
        const appleElement = document.createElement('div')
        appleElement.style.gridRowStart = apple.y
        appleElement.style.gridColumnStart = apple.x
        appleElement.classList.add('apple')
        snakegame.appendChild(appleElement)
    
}