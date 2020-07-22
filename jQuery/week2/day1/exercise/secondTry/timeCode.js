$(document).ready(() => {
   console.log('code connected!')

    $('.circle').click((e) => {
        console.log('in listener');
        $(e.target).toggleClass('active');
    })
});