function nextSlide() {
    $('.slider').css('transform', 'translateX(-100%)').append($('.slide:first')).css('transform', 'translateX(0)');
  }

  function prevSlide() {
    $('.slider').css('transform', 'translateX(-100%)').prepend($('.slide:last')).css('transform', 'translateX(0)');
  }

  setInterval(nextSlide, 3000); 