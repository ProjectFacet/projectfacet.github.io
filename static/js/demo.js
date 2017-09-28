/**
 * Credit: 
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */


$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#475266',
    lineColor: '#394252'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
