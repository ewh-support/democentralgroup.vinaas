jQuery(function ($) {
    "use strict";

    const centralGroup = window.centralGroup || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    centralGroup.bannerSlider = function () {
        $('.banner__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
        });

        $('.conduct__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<div class='prev'><i class='icon fas fa-chevron-left'></i></div>`,
			nextArrow: `<div class='next'><i class='icon fas fa-chevron-right'></i></div>`,
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        centralGroup.bannerSlider();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });
    $(window).on('resize', function() {
    });
});