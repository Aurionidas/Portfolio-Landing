const PALETA_COLORES = ["#0A1A2C", "#8a7d6b", "#c9b99a", "#555"]

class Bola{

    constructor(x,y){
        this.x = x
        this.y = y
        this.radio = Math.floor(Math.random() * (12 - 3) + 3)
        this.dirX = (Math.random() * 2) - 1
        this.dirY = (Math.random() * 2) - 1
        this.velocidad = Math.floor(Math.random() * (6 - 2) + 2)
        this.color = PALETA_COLORES[Math.floor(Math.random() * PALETA_COLORES.length)]

    }

    dibujar(){
        ctx.beginPath()
        ctx.globalAlpha = 0.25
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
        ctx.globalAlpha = 1
    }

    mover(){
        this.x += this.dirX * this.velocidad
        this.y += this.dirY * this.velocidad


        if(this.x + this.radio >= canvas.width || this.x - this.radio <= 0){
            this.dirX *= -1
        }

        if(this.y + this.radio >= canvas.height || this.y - this.radio <= 0){
            this.dirY *= -1
        }



    }

    influence(mx, my){
        const dx = this.x - mx
        const dy = this.y - my
        const distancia = Math.sqrt(dx * dx + dy * dy)

        if (distancia < 80 && distancia > 0){
            const fuerza = (80 - distancia) / 80 * 0.5
            this.x += (dx / distancia) * fuerza
            this.y += (dy / distancia) * fuerza
        }
    }


}
