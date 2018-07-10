$(document).ready(function () {
    const atSlider = new Swiper('.a-testimonials__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            600: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1320: {
                slidesPerView: 2
            }
        }
    });
});
