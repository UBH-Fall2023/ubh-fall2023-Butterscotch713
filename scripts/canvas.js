export default {
    props: [ 'width', 'height' ],
    methods: {
       drawGrid () {}
    },
    mounted () {
       this.drawGrid()
    }
}

function drawGrid () {
    let ctx = document.getElementById('grid') 
    let s = 28
    let pL = s
    let pT = s
    let pR = s
    let pB = s
    
    ctx.strokeStyle = 'lightgrey'
    ctx.beginPath()
    for (var x = pL; x <= this.width - pR; x += s) {
       ctx.moveTo(x, pT)
       ctx.lineTo(x, this.height - pB)
    }
    for (var y = pT; y <= this.height - pB; y += s) {
       ctx.moveTo(pL, y)
       ctx.lineTo(this.width - pR, y)
    }
    ctx.stroke()
}