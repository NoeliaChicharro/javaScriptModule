// selection
const add = document.getElementById('add');
const list = document.querySelector('ul');
const remove = document.getElementById('remove');
let counter = 0;

add.addEventListener('click', ev => {
  let newElement = document.createElement('li');
  newElement.innerHTML = `Element # ${counter}`;
  list.appendChild(newElement);
  counter ++;
});

remove.addEventListener('click', ev => {
removeLi();
});

function removeLi() {
  counter--;
  const li = document.querySelector('li:last-child');
  li.remove();
}
