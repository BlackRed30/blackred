$(window).on('scroll', function () {

    var wScroll = $(this).scrollTop();

    if (wScroll >= $('.introduction').offset().top / 2) {
        $('.animasi').addClass('animated fadeInLeft');
    }
    if (wScroll >= $('.done-so-far').offset().top / 1.5) {
        $('.animasi-2').addClass('animated fadeInLeft');
    }
    //if (wScroll >= $('.portfolio').offset().top / 1.3) {
    //    $('.animasi-3').addClass('animated fadeInLeft');
    //}
    if (wScroll >= $('.skill').offset().top) {
        $('.animasi-4').addClass('animated fadeInLeft');
    }
});
