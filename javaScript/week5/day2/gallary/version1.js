// declare our variables

// current big image
const current = document.querySelector('#active');
// small thumbnail images
const images = document.querySelectorAll('.images img');
// opacity for selected images
const opacity = 0.4;

// now we start with our event lister
images.forEach(image =>{
  image.addEventListener('click', imageClick)
});

// set the default thumbnail's opacity down
images[0].style.opacity = opacity;

function imageClick(e) {
  // set all images to full opacity
  images.forEach(image =>{
    image.style.opacity = '1';
  });

  // change the src of the current image
  current.src = e.target.src;

  // add fade class for fadeIn effect
  current.classList.add('fade-in');

  // remove the fade class when animation is over
  setTimeout(function () {
    current.classList.remove('fade-in');
  }, 500)

  // reduce opacity of grid thumbnail
  e.target.style.opacity = opacity;
}


