let square;
let apple;

function setup() {
  createCanvas(600, 600);
  square = new Square();
  apple = new Apple();
}

function draw() {
  background('gray');
  square.show();

  for (let x = 0; x < width; x += width / (width/square.size)){
    for (let y = 0; y < height; y += height / (height/square.size)){
      stroke(55);
      strokeWeight(2);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  apple.show();
  square.update();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    square.move(0, -50);
  } else if (keyCode === DOWN_ARROW){
    square.move(0, 50);
  } else if (keyCode === RIGHT_ARROW){
    square.move(50, 0);
  } else if (keyCode === LEFT_ARROW){
    square.move(-50, 0);
  }
}