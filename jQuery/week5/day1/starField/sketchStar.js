let stars = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 400; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  traslate(width/2, height/2);

  for (let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
}