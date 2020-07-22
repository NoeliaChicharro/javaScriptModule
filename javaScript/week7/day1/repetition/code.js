let count = 1;

document.querySelector('#circle').addEventListener('click', e => {
  createSquare();
  counter();
});

function createSquare() {
  let xAxis = Math.floor((Math.random() * (window.innerWidth - 100)) +1) ;
  let yAxis = Math.floor((Math.random() * (window.innerHeight - 100)) +1);

  const square = document.createElement('div');
  square.setAttribute('class', 'square');
  square.setAttribute('style', `left: ${xAxis}px; top: ${yAxis}px`);
  document.querySelector('main').appendChild(square);

  changeColor(square);
}

function counter() {
  const span = document.querySelector('span');
  span.textContent = `Times clicked: ${count}`;
  count++;
}


let x = 0;
function changeColor(box) {
 box.style.backgroundColor = `rgb(${x}, ${x}, ${x}`;
 x++;
}

