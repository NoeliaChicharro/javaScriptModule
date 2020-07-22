$(document).ready(function () {

  // selecting elements with jQuery
  $('p')
    .css('border', '1px solid hotpink');

  // select classes
  $('.foo')
    .css('border', '1px solid lime');

  // select id
  $('#bar')
    .css('border', '1px solid orange');

  // complex css queries
  $('p:first')
    .css('color', 'green');

  // ot not()
  $('p:not(#bar)')
    .css('color', 'azure');


});