const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth - 20
canvas.height = innerHeight - 20


let bolas = []

for (let i = 0; i < 60; i++)
    bolas.push(new Bola(canvas.width/2, canvas.height/2))

function resizeCanvas() {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
    bolas.forEach(bola => {
        bola.x = canvas.width / 2;
        bola.y = canvas.height / 2;
    });
}

// Rezising canvas
resizeCanvas();

window.addEventListener('resize', resizeCanvas);

function animar(){


    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bolas.forEach(bola => {
        bola.dibujar()
        bola.mover()
    })

    requestAnimationFrame(animar)
}



animar()