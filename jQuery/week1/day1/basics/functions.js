$(document).ready(function () {
  $('button').click( function () {
    setColor($('input').val());
  });

});

function setColor(col) {
  $('.box')
    .css('background', col);

  $('.circle')
    .css('border', `2px solid ${col}`);

  $('.text')
    .css('color', col);
}