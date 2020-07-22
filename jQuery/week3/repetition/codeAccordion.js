$(document).ready(() => {
  $('.set > a').on('click', function () {
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).siblings('.content').slideUp(400);
    } else {
      $('.set > a').removeClass('active');
      $(this).addClass('active');
      $('.content').slideUp(400);
      $(this).siblings('.content').slideDown(400);
    }
  })
});