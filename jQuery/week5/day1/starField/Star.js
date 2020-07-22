function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  this.show = function () {
    fill('azure');
    noStroke();

    // Map
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    ellipse(sx, sy, 8, 8);
  };

  this.update = function () {
    this.z = this.z - 10;

    if (this.z < 1){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = width;
    }
  }
}