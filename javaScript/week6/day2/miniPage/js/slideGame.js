$(document).ready(() => {

  let playing = false;

  $('#shuffle').click(function () {
    $('#row1').shuffle();
    $('#row2').shuffle();
    $('#row3').shuffle();
    $('#table').shuffle();
  });

  $.fn.shuffle = function () {
    return this.each(function () {
      const items = $(this).children().clone(true);
      return (items.length) ? $(this).html($.shuffle(items)) : this;
    });
  };

  $.shuffle = function (arr) {
    for (let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  };

  // tile swap
  $('.tile1').click(function () {
    swap(this, this);
  });

  $('.tile2').click(function () {
    swap(this, this);
  });

  $('.tile3').click(function () {
    swap(this, this);
  });

  $('.tile4').click(function () {
    swap(this, this);
  });

  $('.tile5').click(function () {
    swap(this, this);
  });

  $('.tile6').click(function () {
    swap(this, this);
  });

  $('.tile7').click(function () {
    swap(this, this);
  });

  $('.tile8').click(function () {
    swap(this, this);
  });

  function swap(tile, tile1) {
    const grayOne = `<div class="tile10"></div>`;

    if (playing === false){
      $(tile).replaceWith($(grayOne));
      $('.tile9').replaceWith($(tile));
      playing = true;
    } else if (playing === true){
      $(tile).replaceWith($(grayOne));
      $(grayOne).replaceWith($(tile1));
    }
  }

});









