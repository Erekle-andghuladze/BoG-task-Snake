const gridSize = 20
export function randomGridPos() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1 
    }
}