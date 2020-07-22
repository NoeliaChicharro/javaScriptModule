let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
const stripe = document.querySelector('#stripe');
const resetButton = document.querySelector('#reset');

// * Reset Button **
resetButton.addEventListener('click', e => {
  // generate all new colors
  colors = generateRandomColors(6);

  // pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  stripe.style.backgroundColor = '#9d9d9d';
  resetButton.textContent = 'New Colors';
});

/** Color Blocks **/
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
  // add colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
      message.textContent = 'Correct';
      resetButton.textContent = 'Play Again';
      changeColors(clickedColor);
      stripe.style.backgroundColor = clickedColor;
      resetButton.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = 'gray';
      message.textContent = 'Try Again';
    }
  });
}

function changeColors(color) {
  // loop through all the squares
  for (let i = 0; i < colors.length; i++){
    // change the color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];

  // add num random to arr
  for (let i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }

  // return array
  return arr;
}

function randomColor() {
  // pick a 'red'
  let red = Math.floor(Math.random() * 256);
  // pick a 'green'
  let green = Math.floor(Math.random() * 256);
  // pick a 'blue'
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}