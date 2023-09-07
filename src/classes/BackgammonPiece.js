class BackgammonPiece {
  constructor(c, triangleX, triangleWidth, triangleDirection, piece, i, yTop, yBottom) {
    this.c = c;
    this.x = triangleX + triangleWidth / 2;
    this.radius = triangleWidth / 5;
    this.y = this.calculateY(i, triangleDirection, yTop, yBottom);
    this.color = piece.color;
  }

  calculateY(i, triangleDirection, yTop, yBottom) {
    if (i === 0) {
      return triangleDirection === 'down' ? yTop + this.radius : yBottom - this.radius;
    }
    return triangleDirection === 'down' ? yTop + i * this.radius * 2 + this.radius : yBottom - i * this.radius * 2 - this.radius;
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
    const distance = Math.sqrt((e.clientX - this.x) ** 2 + (e.clientY - this.y) ** 2);
    return distance < this.radius;
  }
}
export default BackgammonPiece;