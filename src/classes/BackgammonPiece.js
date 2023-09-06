export default class BackgammonPiece {
    constructor(c, x, y, radius, color) {
      this.c = c;
      this.x = x;
      this.y = y;
      this.color = color;
      this.radius = radius;
    }
  
    draw() {
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.c.fillStyle = this.color;
      this.c.fill();
      this.c.strokeStyle = this.color === 'white' ? 'black' : 'white';
      this.c.lineWidth = 3;
      this.c.stroke();
      this.c.closePath();
    }
    isClicked(e) { 
        const distance = Math.sqrt(Math.pow(e.clientX - this.x, 2) + Math.pow(e.clientY - this.y, 2));
        if (distance < this.radius) {
            return true;
        }
        return false;
    }
  }