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

//  Control -----
function initMobileComponents(object) {
  if ($(window).width() < 1171) {
    $('.not-mobile').hide();
    $('.only-mobile').show();
  }
}

//  Flux transitional effects -----
//  --- to BLUE (full)
$('a.flux.blue').click( function(e) {
  e.preventDefault();
  var link = $(this);
  if ($(window).width() < 1171) { // mobile
    $('.fade').fadeOut( function() {
      $('div.blue-mobile').animate({height:'100vw'}, 500, function() {
        document.location = link.attr('href');
      })
    })
  } else { // not mobile
    $('.fade').fadeOut( function() {
      $('div.blue').animate({width:'100vw'}, 500, function() {
        document.location = link.attr('href');
      })
    })
  }
})
//  --- to WHITE+BLUE (half)
$('a.flux.white-blue').click( function(e) {
  e.preventDefault();
  var link = $(this);
  if ($(window).width() < 1171) { // mobile
    $('div.blue-mobile').css("top", "0");
    $('div.white-mobile').css("top", "0");
    $('.fade').fadeOut( function() {
      $('div.blue-mobile').animate({height:'0vh'}, 500, function() {
        $('div.white-mobile').animate({height:'50vh'}, 500, function() {
          document.location = link.attr('href');
        })
      })
    })
  } else { // not mobile
    $('div.blue').css("left", "0");
    $('div.white').css("left", "0");
    $('.fade').fadeOut( function() {
      $('div.blue').animate({width:'100vw'}, 500, function() {
        $('div.white').animate({width:'50vw'}, 500, function() {
          document.location = link.attr('href');
        })
      })
    })
  }
})
//  --- to BLUE+WHITE (half)
$('a.flux.blue-white').click( function(e) {
  e.preventDefault();
  var link = $(this);
  if ($(window).width() < 1171) { // mobile 
    $('.fade').fadeOut( function() {
      $('div.blue-mobile').animate({height:'100vw'}, 500, function() {
        $('div.white-mobile').animate({height:'50vw'}, 500, function() {
          document.location=link.attr('href');
        })
      })
    })
  } else {
    $('div.blue').css("right", "0");
    $('div.white').css("right", "0");
    $('.fade').fadeOut( function() {
      $('div.blue').animate({width:'100vw'}, 500, function() {
        $('div.white').animate({width:'50vw'}, 500, function() {
          document.location=link.attr('href');
        })
      })
    })
  }
})

initMobileComponents();

});
