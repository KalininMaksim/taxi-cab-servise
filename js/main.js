$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.skrollToTop').fadeIn();
        } else {
            $('.skrollToTop').fadeOut();
        }
    });

    $('.skrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false
    });
});
