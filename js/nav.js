'use strict';
$(function() {
  $('#humbergerMenu').on('click', function() {
    $(this).next().slideToggle();
    $('body').toggleClass('fixed');
    $('.pcmenu').click(function(e) {
      e.preventDefault();
    })
  })

  $('.pcmenu').on('click', function() {
    $(this).next().slideToggle();
  })
})