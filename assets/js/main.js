$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('.navigation').fadeToggle();
});

MicroModal.init();

$("#main-header").headroom();

$(document).ready(function(){
    $('.slick-slider').slick({
        autoplay: true,
        prevArrow: '<div class="slick-prev"><img src="/assets/images/icons/chevron-left.svg" /></div>',
        nextArrow: '<div class="slick-next"><img src="/assets/images/icons/chevron-right.svg" /></div>'
    });
    AOS.init();
});