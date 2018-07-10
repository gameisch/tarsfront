$(document).ready(function () {
    const header = $('.header'), body = $('body');
    function bodyPaddingTop() {
        body.css('padding-top', header.height());
    }
    $(window).resize(bodyPaddingTop).trigger('resize');
    $('.header__menu-button').click(function () {
        $('.header').toggleClass('header--menu-active');
        $('body').toggleClass('disable-scroll');
    });
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 250) {
            header.addClass('is-sticky');
        } else {
            header.removeClass('is-sticky');
        }
    });
});
