// checks screen condition - return true
function screen(elem) {
    const screentop = $(window).scrollTop();
    const screenbottom = screentop + $(window).height();
    const elemtop = $(elem).offset().top;

    if ( (elemtop) <= screenbottom && (elemtop >= screentop) ) {
        return true;
    }
}

// cycle and check screen condition - return true
function cycle(elem) {
    for (let i = 0; i < elem.length; i++) {
        if ( screen(elem[i]) ) {
            return true;
        }
    }
}

// define objects of elements to animate
const slideUp = $('.slide-up');
const slideIn = $('.slide-in');

function animate(elem) {

    function apply(object) {
        // loop through array as jquery object
        $.each( object, function (index, value) {
            if ( $(value).hasClass('slide-up') ) {
                $(value).css('opacity','0').css('position','relative').css('top','100px');
                $(value).animate({top:'0', opacity:'1'}, 777);
            } else if ( $(value).hasClass('slide-in') ) {
                $(value).css('opacity','0').css('position','relative').css('left','-100px');
                $(value).animate({left:'0', opacity:'1'}, 777);
            }
        })
    }

    document.addEventListener('scroll', function() {
        if ( cycle(elem) ) {
            apply(elem);
        } else {
            return false;
        }
    })
}

// callback
animate(slideUp);
animate(slideIn);
