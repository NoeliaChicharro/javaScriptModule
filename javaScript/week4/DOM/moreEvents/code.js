/** Onload event **/
// at the moment the html is loaded
// use this for the code in general (so u can put the script tag in the head of the html)
// but keep in mind its more code to read (for humans and computers)
window.onunload = function () {
  console.log('window has loaded!');


/** Mouse over event **/
/*const label = document.querySelector('label');

// events are all written lower case!

label.addEventListener('mouseover', function (e) {
  console.log(e);
});*/

/*const labels = document.querySelectorAll('label');
labels.forEach(label => {
  label.addEventListener('mouseover', function (e){
    console.log(e.target.innerHTML);
  })
});*/

/** Mouse move event **/
/*document.addEventListener('mousemove', ev => {
  console.log(ev.x, ev.y);
});*/

/** Mouse enter and mouse out events **/
// actually the same as over but.. u can control the entering point and the 'leaving' point.
/*document.querySelector('label').addEventListener('mouseenter', ev => {
  console.log(`mouse has entered at ${ev.x}x and ${ev.y}y`);
});

document.querySelector('label').addEventListener('mouseout', ev => {
  console.log(`mouse has left at ${ev.x}x and ${ev.y}y`);
});*/

/** Key down event **/
/*document.querySelector('input').addEventListener('keydown', ev => {
  console.log(ev.code);
});*/

};















