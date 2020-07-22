/** Elements **/
const drop = document.getElementById('drop');
const dropDown = document.getElementById('dropDown');
const img = document.getElementById('img');

/** Events **/
drop.addEventListener('click', ev => {
  dropDown.classList.toggle('show');
  img.classList.toggle('showImage');
});