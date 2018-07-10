$(document).ready(function () {
    const gallerySlider = new Swiper('.gallery__slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.gallery__slider-next',
            prevEl: '.gallery__slider-prev',
        },
    });
});
