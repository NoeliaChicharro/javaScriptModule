$(document).ready(()=>{
  $('#clickMe').click(e => {
    $('#dropDown').slideDown('slow')
      .css('position', 'absolute')
      .css('margin', '3vh 0 0 0')
      .css('display', 'flex')
      .css('flex-direction', 'column')
      .css('width', '6rem')
      .css('height', '6rem')
      .css('background', 'darkolivegreen');
  });

  $('#close').click(e => {
    $('#dropDown').slideUp();
  });

});
