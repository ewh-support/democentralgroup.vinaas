jQuery(function ($) {
    "use strict";

    const centralGroup = window.centralGroup || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    centralGroup.bannerSlider = function () {
        if($('.slider__comp').length) {
            $('.slider__comp').each(function() {
                console.log('DATASET: ', this.dataset);
                // dataset, có thể set giá trị mặc định nêu muốn - sử dụng ||
                // data-slides-to-show="3", data-slides-to-scroll="1", data-dots="1", data-arrows="0"
                let mSlidesToShow = parseInt(this.dataset.slidesToShow);
                let mSlidesToScroll = parseInt(this.dataset.slidesToScroll);
                let mDots = parseInt(this.dataset.dots);
                let mArrows = parseInt(this.dataset.arrows);
                let mAutoplay = parseInt(this.dataset.autoplay);
                let mAutoplaySpeed = parseInt(this.dataset.autoplaySpeed);
                let mResponsive = [];

                console.log(mAutoplay);
                console.log(mAutoplaySpeed);
        
                // Convert mDots, mArrows to True|False
                mDots = !!mDots;
                mArrows = !!mArrows;
                mAutoplay = !!mAutoplay;
                
                if(mSlidesToShow === 4) {
                    mResponsive = [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                arrows: false
                            }
                        }
                    ];
                } else if (mSlidesToShow === 3) {
                    mResponsive = [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                arrows: false
                            }
                        }
                    ];
                } else if(mSlidesToShow === 2) {
                    mResponsive = [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                arrows: false
                            }
                        }
                    ];
                }
                console.log(mResponsive);
        
                $(this).slick({
                    infinite: true,
                    slidesToShow: mSlidesToShow,
                    slidesToScroll: mSlidesToScroll,
                    dots: mDots,
                    arrows: mArrows,
                    autoplay: mAutoplay,
                    autoplaySpeed: mAutoplaySpeed,
                    prevArrow: `<div class='prev'><i class='icon fas fa-chevron-left'></i></div>`,
                    nextArrow: `<div class='next'><i class='icon fas fa-chevron-right'></i></div>`,
                    responsive: mResponsive
                });
            });

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