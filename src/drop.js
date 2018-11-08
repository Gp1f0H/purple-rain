class Drop {

  constructor(gameHeight, gameWidth) {
    this.position = {
      x: this.getRandomInt(0,800),
      y: this.getRandomInt(-300,-50)
    };
    this.zIndex = 0;
    this.width = 1;
    this.length = this.getRandomInt(4,10);
    this.speed = this.getRandomInt(2,5);
    this.gravity = 0.1;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  draw(ctx) {
    ctx.fillStyle = 'rgb(138,43,226)';
    ctx.fillRect(this.position.x,this.position.y, this.width, this.length);
    
  }

  update(deltaTime) {
    // this.speed += 0.05;
    this.position.y += this.speed;
    if (this.position.y >= this.gameHeight + this.length) {
      this.position.y = this.getRandomInt(-200,-100);
      this.speed = this.getRandomInt(2,5);
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}