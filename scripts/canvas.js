function drawGrid () {
    const canvas = document.getElementById('grid')
    const ctx = canvas.getContext("2d");
    let gridSize = 100
    
    ctx.beginPath()
    console.log("Width=" + canvas.width + ", Height=" + canvas.height)
    for (var x = gridSize; x <= canvas.width - gridSize; x += gridSize) {
        ctx.moveTo(x, gridSize)
        ctx.lineTo(x, canvas.height - gridSize)
        console.log("Creating line from " + x + " to " + (canvas.height - gridSize))
    }
    for (var y = gridSize; y <= canvas.height - gridSize; y += gridSize) {
        ctx.moveTo(gridSize, y)
        ctx.lineTo(canvas.width - gridSize, y)
    }
    ctx.stroke()
}
