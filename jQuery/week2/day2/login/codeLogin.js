const box = document.querySelector('#loginBox');

document.querySelector('#link').addEventListener('click', () => {
   box.classList.toggle('show');
});

document.querySelector('#exit').addEventListener('click', () => {
    if (box.classList.contains('show')){
        box.classList.remove('show');
    }
});