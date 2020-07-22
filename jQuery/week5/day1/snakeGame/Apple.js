function Apple() {
  this.x = 325;
  this.y = 325;
  this.d = 50;

  this.show = function () {
    fill('red');
    circle(this.x, this.y, this.d)
  }
}