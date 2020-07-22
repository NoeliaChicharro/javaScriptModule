$(document).ready(function () {
  //append
  $('main')
    .append('<p id="foo" style="color: hotpink">Hello p-tag</p>');

  //prepend
  $('section')
    .prepend('<h2 style="color: aquamarine">My Section</h2>');

  //text with jQuery (if there is content this method will overwrite it)
  $('header')
    .text('I am text!')

  // html method (if there is content this method will overwrite it)
  $('section div')
    .html('<h2 style="color: chocolate">Hello There</h2>');
});