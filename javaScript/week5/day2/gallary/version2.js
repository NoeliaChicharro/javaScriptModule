const [current, images] = [document.querySelector('#active'), document.querySelectorAll('.images img')];
images.forEach(image => image.addEventListener('click', (e) => {current.src = e.target.src}));

