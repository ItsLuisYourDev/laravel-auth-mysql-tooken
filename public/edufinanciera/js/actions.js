/**
 * Created by Santiago Alvarez on 11/15/2015.
 */
$(function() {

    $.fn.goTo = function() {
        var currentPos = $(document).scrollTop();
        //var plus = -74;
        var plus = -74;
        if(currentPos < $(this).offset().top){
            console.log("abajo ---" + $(this).offset().top);
        }else{
            //plus = -74;
            plus = -74;
            console.log("arriba ---" + $(this).offset().top);
        }
        $('html, body').animate({
            scrollTop: $(this).offset().top + plus
        }, 700);
        return this; // for chaining...
    };

    $(window).scroll(function(){
        asidePosition();
    });

    $.fn.goToTop = function() {

    };

});
function reziseSection(){
    $('#section1').css('height', $(window).height() - 146);
    $('#section2').css('height', $(window).height());
    $('#section3').css('height', $(window).height());
    $('#section4').css('height', $(window).height());
    $('#section5').css('height', $(window).height());
}

function removeClasses(){
    $('#btnSection1').removeClass('currentSection');
    $('#btnSection2').removeClass('currentSection');
    $('#btnSection3').removeClass('currentSection');
    $('#btnSection4').removeClass('currentSection');
    $('#btnSection5').removeClass('currentSection');
}

function removeClassesMainMenu(){
    $('#main-menu-1').removeClass('main-menu-active');
    $('#main-menu-2').removeClass('main-menu-active');
    $('#main-menu-3').removeClass('main-menu-active');
    $('#main-menu-4').removeClass('main-menu-active');
    $('#main-menu-5').removeClass('main-menu-active');
    $('#main-menu-6').removeClass('main-menu-active');
    $('#main-menu-7').removeClass('main-menu-active');
}

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
});

// function headerPosition(){
//     if ($(window).scrollTop() > $('.main-menu').height()) {
//         $(".main-menu")
//             .addClass("fixed-top");
//     } else {
//         $(".main-menu")
//             .removeClass("fixed-top");
//     }
// }

function asidePosition(){
    if ($(window).width() > 640) {
        if ($(window).scrollTop() > $('aside').height()) {
            $("aside")
                .addClass("aside-fixed");
        } else {
            $("aside")
                .removeClass("aside-fixed");
        }
    };
}

