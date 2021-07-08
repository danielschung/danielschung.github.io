$(document).ready( function() {

//  Animations -----
function introFade(object) {
  $(object).fadeIn(1000);
  $(object).css('opacity','0');
  $(object).fadeTo(977, 1, 'swing');
}

function slideIn(object) {
  $(object).animate({right:'0'}, 300);
}

introFade('.fade'); // run fade animation

//  Flux transitional effects -----
//  --- to BLUE (R to L)
$('a.flux.blue').click( function(e) {
  e.preventDefault();
  var link = $(this);
  $('.fade').fadeOut( function() {
    $('div.blue').animate({width:'100vw'}, 500, function() {
      document.location = link.attr('href');
    });
  });
})
//  --- to WHITE (L to R)
$('a.flux.white').click( function(e) {
  e.preventDefault();
  var link = $(this);
  $('.fade').fadeOut( function() {
    $('div.white').animate({width:'50vw'}, 500, function() {
      document.location = link.attr('href');
    });
  });
})

});
