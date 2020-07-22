const circles = [document.querySelectorAll('.circle')];
const boxes = [document.querySelectorAll('.text')];

for (let i = 0; i < circles.length; i++){
   function palim (index) {
       circles[index].addEventListener('click', () => {
           console.log('in event listener')
       });
   }

}

// check out the siblings.. if u click on a circle all the siblings should remove the active
// class and go back to their default state..(removeClass)

// jQuery toggleClass!
// $(e.target)

/*let circle = circles[i];
circles[i].addEventListener('click', (e) => {
    console.log('circle event listener')
    for (let i = 0; i < boxes.length; i++){
        let box = boxes[i];
        box.classList.toggle('show');
    }
})*/
