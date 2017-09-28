/**
 * Credit: 
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */


$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#363d4c',
    lineColor: '#262a34'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
