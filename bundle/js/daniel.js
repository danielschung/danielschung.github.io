// --- Description: basic functionality
// Table of Contents
//  1. Mobile Nav
//  2. Animations
//  3. Video

$( document ).ready(function() {

//  1. Mobile Nav -----
    
$('div.mobile-nav').click( function() {
  $('div.links a').fadeIn(1000);
  $('nav').animate({width:'252px'},200,'swing');
  $('div.mobile-nav div.line:nth-child(1)').animate({width:'100%'},200,'swing');
  $('div.mobile-nav div.close').show();

  // click wrapper or hamburger to make nav leave
  $('.wrapper, div.close').one('click', function(event) {
    event.stopPropagation();
    $('nav').animate({width:'0px'},200,'swing');
    $('div.mobile-nav div.line:nth-child(1)').animate({width:'67%'},200,'swing');
    $('div.links a').fadeOut();
    $('div.mobile-nav div.close').hide();
  });

});

//  2. Animations -----

// function fades() {
//   $('div.header-text').hide();
//   $('div.header-text').fadeIn(1000,'swing');
// }

// fades();

//  3. Video -----

$('video').focus( function() {
  $(this).play();
})



});


