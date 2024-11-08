class Bola{

    constructor(x,y){
        this.x = x
        this.y = y
        this.radio = Math.floor(Math.random() * (12 - 3) + 3)
        this.dirX = (Math.random() * 2) - 1
        this.dirY = (Math.random() * 2) - 1
        this.velocidad = 5

    }

    dibujar(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2)
        ctx.fillStyle = "Black" //"rgb(125,10,20)"
        ctx.fill()
        ctx.closePath()
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


}