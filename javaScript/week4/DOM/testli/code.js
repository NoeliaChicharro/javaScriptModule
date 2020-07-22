/** Elements **/
const box = document.querySelector('div');
const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const last = document.querySelector('span');
let active = null;

function generalEvent(ev) {
  document.getElementById('type').innerHTML = ev.type;
  document.getElementById('target').innerHTML = ev.target.localName;
  document.getElementById('mouseX').innerHTML = ev.x;
  document.getElementById('mouseY').innerHTML = ev.y;
  document.getElementById('offsetX').innerHTML = ev.offsetX;
  document.getElementById('offsetY').innerHTML = ev.offsetY;
  document.getElementById('pos').innerHTML = ev.code;
  //console.log(ev);
}

function color() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

/** Box **/
box.addEventListener('mousemove', ev => {
  generalEvent(ev);
});

box.addEventListener('mouseenter', ev => {
  box.style.border = '2px solid green';
});

box.addEventListener('click', ev => {
  generalEvent(ev);
  // if u wanna add more then one style value it
  this.setAttribute('style', `background-color: ${color()}; 
      border: 3px solid ${color()}`);
});

box.addEventListener('dblclick', ev => {
  generalEvent(ev);
  this.classList.toggle('roundy');
});

box.addEventListener('mouseout', ev => {
  this.style.border = '2px solid hotpink';
  generalEvent(ev);
});

/** Button **/
buttons.forEach(button => {
  button.addEventListener('click', ev => {
    generalEvent(ev);
    ev.target.classList.toggle('active');
  })
});

/** Input **/
input.addEventListener('keydown', ev => {
  generalEvent(ev);
});

/**  **/
document.addEventListener('keydown', ev => {
  last.innerHTML = ev.key;
});





