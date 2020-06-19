$(window).scroll(function () {
    if ($(window).scrollTop() >= 140) {
        $('.page-header__top').addClass('page-header__top--fixed');
    } else {
        $('.page-header__top').removeClass('page-header__top--fixed');
    }
});
