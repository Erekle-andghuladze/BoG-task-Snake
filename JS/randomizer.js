const gridSize = 20
export function randomGridPos() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1 
    }
}

export function outsideGrid(posit) {
    return (posit.x < 1 || posit.x > gridSize || posit.y < 1 || posit.y > gridSize )  
}