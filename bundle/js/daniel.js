// --- Description: basic functionality
// Table of Contents
//  1. Mobile Nav
//  2. Anime Functions
//  3. Anime Deploy on Scroll

$(document).ready( function() {

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

//  2. Anime Functions -----

function introFade(object) {
  $(object).css('opacity','0');
  $(object).fadeTo(977, 1, 'swing');
}

function hide(object) {
  $(object).css('opacity','0');
}

function fade(object) {
  $(object).fadeTo(777, 1, 'swing');
}

function scrollFade(object) {
  $(object).each( function(i){
    // let bottom_of_element = $(this).offset().top + $(this).outerHeight();
    let top_of_element = $(this).offset().top;
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > top_of_element ){
      fade($(this));
    }
  });
}

//  3. Anime Deploy -----

introFade('header.wrapper *');
hide('section.wrapper *');
hide('footer.wrapper *');
scrollFade('section.wrapper *');
scrollFade('footer.wrapper *');


$(window).scroll( function(){ // deploy on scroll
  scrollFade('section.wrapper *');
  scrollFade('footer.wrapper *');
});





});


