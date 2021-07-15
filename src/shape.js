//Create Circle
  class Circle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }
    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = this.color;
      context.fill();
      context.closePath();
    }
    update() {
      this.draw();
    }
  }
//Create Rectangle
  class Rectangle {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
    draw() {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
      this.draw();
    }
  }