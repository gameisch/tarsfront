$(document).ready(function () {
    const testimonialsSlider = new Swiper('.testimonials__slider', {
        loop: true,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            }
        }
    });
});
