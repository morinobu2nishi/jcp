'use strict';
$(function() {
  $('.btn').click(function() {
    $('#resolt').load('more.html', function() {
      $('#message').css('color','red');
    })
  })
})