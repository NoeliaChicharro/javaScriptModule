$(document).ready(() => {

  // button variables (arrows/checkBox)
  const prevBtn = $('a.buttonBack'),
        nextBtn  = $('a.buttonWeiter'),
        checkBox = $('#toggleAnimation');

  // slideShow variables
  const slider = $('#slideShow'),
        sliderUl = slider.children('ul'),
        slides = sliderUl.children('li'),
        slideCount = slides.length,
        slideWidth = slides.width(),
        slideHeight = slides.height(),
        sliderUlWidth = slideCount * slideWidth;

  let sliderInterval = null;

  // shrink the slider, making it as big as the slide
  slider.css({
    width: slideWidth,
    height: slideHeight
  });

  // fit the row (in this case ul) of slides into the slider
  sliderUl.css({
    width: sliderUlWidth,
    marginLeft: -slideWidth
  });

  // take the last slide and prepend to the row of slides
  slides.last().prependTo(sliderUl);

  // clickEvents
  prevBtn.on('click', moveLeft);
  nextBtn.on('click', moveRight);
  checkBox.on('click', onSliderToggle);

  function moveLeft(e) {
    console.info('in moveLeft');
    if (e){
      e.preventDefault();
    }

    // Animate the movement of the slide
    sliderUl.animate({
      left: +slideWidth
    }, 200, function () {
      $(this).children('li').last().prependTo(sliderUl);
      $(this).css('left', '');
    })
  }

  function moveRight(e) {
    if (e){
      e.preventDefault();
    }

    sliderUl.animate({
      left: -slideWidth
    }, 200, function () {
      $(this).children('li').first().appendTo(sliderUl);
      $(this).css('left', '');
    })

  }

  function onSliderToggle(e) {
    let _this = $(e.currentTarget);
    if (_this.is(':checked')){
      // start a timer
      sliderInterval = setInterval(moveRight, 2000)
    } else {
      // stop the timer
     clearInterval(sliderInterval)
    }
  }
  
});
















