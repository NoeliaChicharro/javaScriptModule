function Square() {
  this.x = 0;
  this.y = 0;
  this.size = 50;

  this.show = function(){
    fill('azure');
    rect(this.x, this.y, this.size, this.size);
  };

  this.move = function (xVal, yVal) {
    this.x = this.x + xVal;
    this.y = this.y + yVal;
  };


  this.update = function () {
    if (this.x > width-this.size){
      this.x = 0;
    } else if (this.x < 0){
      this.x = (width-this.size);
    } else if (this.y > height-this.size){
      this.y = 0;
    } else if (this.y < 0){
      this.y = (height-this.size);
    }
  };


}
