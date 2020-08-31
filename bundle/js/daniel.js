// --- Description: basic functionality
// Table of Contents
//  1. Mobile Nav
//  2. Animations

$( document ).ready(function() {

//  1. Mobile Nav
    
$('div.mobile-nav').click( function() {
  $('div.links a').hide();
  $('div.links a').fadeIn(1000);
  $('nav').animate({width:'202px'},200,'swing');

  $('div.mobile-nav div.line:nth-child(1)').animate({width:'100%'},200,'swing');

  // click wrapper to make nav leave
  $('.wrapper').one('click', function() {
    $('nav').animate({width:'0px'},200,'swing');
    $('div.mobile-nav div.line:nth-child(1)').animate({width:'67%'},200,'swing');
  });
});

//  2. Animations

// function fades() {
//   $('div.header-text').hide();
//   $('div.header-text').fadeIn(1000,'swing');
// }

// fades();

});


