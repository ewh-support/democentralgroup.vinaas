jQuery(function ($) {
    "use strict";

    const centralGroup = window.centralGroup || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    centralGroup.bannerSlider = function () {
        if($('.banner__slider').length) {
            $('.banner__slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: `<div class='prev'><i class='icon fas fa-chevron-left'></i></div>`,
                nextArrow: `<div class='next'><i class='icon fas fa-chevron-right'></i></div>`,
            });

            $('.banner__slider').slickAnimation();
        }


        if($('.conduct__slider').length) {
            $('.conduct__slider').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow: `<div class='prev'><i class='icon fas fa-chevron-left'></i></div>`,
                nextArrow: `<div class='next'><i class='icon fas fa-chevron-right'></i></div>`,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        }

        if($("#back-to-top").length) {
            const valHeight = $(window).height();
            
            if($(window).scrollTop() < valHeight) {
                $("#back-to-top").addClass('hidden');
            } else {
                $("#back-to-top").removeClass('hidden');
            }
            $(window).scroll(function() {
                if($(window).scrollTop() < valHeight) {
                    $("#back-to-top").addClass('hidden');
                } else {
                    $("#back-to-top").removeClass('hidden');
                }
            });
            $("#back-to-top").on('click', function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 1000);
            });
        }
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