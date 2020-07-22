$(document).ready(() => {
  $('#creator').click(e => {
    $('main')
      .append('<div class="blueBox"></div>')
      .css('position', 'relative')
  });

  $('#deletor').click(e => {
    $('.blueBox:last-child')
      .remove()
  });

});