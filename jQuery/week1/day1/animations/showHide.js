$(document).ready(() => {
  // show the p (show, fadeInd, slideDown)
  $('#showP').click(e => {
    $('p').fadeIn(1000);
  });

  // hide the p (hide, fadeOut, slideUp)
  $('#hideP').click(e => {
    $('p').fadeOut('fast');
  });
});