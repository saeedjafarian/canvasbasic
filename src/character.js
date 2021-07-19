import { context } from './basic';

class Character {

    constructor (src, sx, sy, sWidth, sHeight, dX, dY, dWidth, dHeight) {
        this.src = src;
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.dX = dX;
        this.dY = dY;
        this.dWidth = dWidth;
        this.dHeight = dHeight;
    }
    draw() {
        this.img = new Image();
        this.img.src = this.src;
        context.drawImage(this.img,
         this.sx, this.sy, this.sWidth, this.sHeight,
         this.dX, this.dY, this.dWidth, this.dHeight);
    }
    update(){
        this.draw();
    }
    
}

export { Character };