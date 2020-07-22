$(document).ready(() => {
  // goal: change to colors of the list items while hovering over them
  $('.high').hover(
    //mouse in
    function () {
      // add an element in the hovered element
      $(this)
        .append('<span style="color: red"> !!! DO THIS NOW !!!</span>')
    },
    //mouse out
    function () {
      $('span')
        .remove();
    }
  );

  $('.mid').hover(
    //mouse in
    function () {
      // add an element in the hovered element
      $(this)
        .append('<span style="color: orange"> U got some time</span>')
    },
    //mouse out
    function () {
      $('span')
        .remove();
    }
  );

  $('.low').hover(
    //mouse in
    function () {
      // add an element in the hovered element
      $(this)
        .append('<span style="color: green"> Do it when ever u want</span>')
        .css('')
    },
    //mouse out
    function () {
      $('span')
        .remove();
    }
  );

});
