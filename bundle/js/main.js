// define objects of elements to animate
const slideUp = $('.slide-up');
const slideIn = $('.slide-in');
const fadeIn = $('.fade-in');

// applies animation
function animate(component) {
    if ( $(component).hasClass('slide-up') ) {
        $(component).css('opacity','0').css('position','relative').css('top','100px');
        $(component).animate({top:'0', opacity:'1'}, 700);
    } else if ( $(component).hasClass('slide-in') ) {
        $(component).css('opacity','0').css('position','relative').css('left','-100px');
        $(component).animate({left:'0', opacity:'1'}, 700);
    } else if ( $(component).hasClass('fade-in') ) {
        $(component).css('opacity', '0');
        $(component).animate({opacity:'1'}, 800);
    }
}

// cycle array and check screen condition
function cycle(elem) {
    for (let i = 0; i < elem.length; i++) {
        const screentop = $(window).scrollTop();
        const screenbottom = screentop + $(window).height();
        const elemtop = $(elem[i]).offset().top;
        if ( elemtop <= screenbottom ) {
            if ( !($(elem[i]).hasClass('activated')) ) {
                animate(elem[i]);
                $(elem[i]).addClass('activated');
            }
        }
    }
}

$( document ).ready(function() {
    slideUp.css('opacity','0');
    slideIn.css('opacity','0');
    fadeIn.css('opacity','0');
    cycle(slideUp);
    cycle(slideIn);
    cycle(fadeIn);
})

document.addEventListener('scroll', function() {
    cycle(slideUp);
    cycle(slideIn);
    cycle(fadeIn);
})

// mobile navigation and media query
function toggleNav() {
    if ( $('#nav').hasClass('on') ) {
        $('#m-nav .m-button .line:first-child').animate({width:'70%'}, 277);
        $('#nav').removeClass('on').animate({left:'100vw'}, 477);
        $('#m-nav').fadeIn();
    } else {
        $('#m-nav .m-button .line:first-child').animate({width:'100%'}, 277);
        $('#nav').addClass('on').animate({left:'0'}, 477);
        $('#m-nav').fadeOut();
    }
}

function initNav() {
    const nav = document.getElementById('nav');
    const button = document.getElementById('m-nav');
    const close = document.getElementById('close');

    if (window.innerWidth > 540) {
        nav.classList.remove('mobile');
    } else {
        nav.classList.add('mobile');
        button.addEventListener('click', toggleNav);
        close.addEventListener('click', toggleNav);
    }
}

// initialize nav on load and resize
initNav();
window.addEventListener('resize', initNav);









