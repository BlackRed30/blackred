// $(window).scroll(function () {
// var wScroll = $(this).scrollTop();

// const ambil_introduction = document.querySelector('.animasi_introduction')
// ambil_introduction.classList.add('animated', 'fadeInRight')

// });

// event pada saat link di klik

// $('.tekan').on('click', function () {
//     // ambil isi href
//     var tujuan = $(this).attr('href');
//     // tangkap elemen ybs
//     var elemenTujuan = $(tujuan);

//     //testing untuk nilai

//     console.log(elemenTujuan.offset().top);

// })

//testing saat di scroll



$(window).on('scroll', function () {

    var wScroll = $(this).scrollTop();

    if (wScroll >= $('.introduction').offset().top) {
        $('.animasi').addClass('animated fadeInLeft');
    }
    if (wScroll >= $('.done-so-far').offset().top) {
        $('.animasi-2').addClass('animated fadeInLeft');
    }
    if (wScroll >= $('.portfolio').offset().top) {
        $('.animasi-3').addClass('animated fadeInLeft');
    }
    if (wScroll >= $('.skill').offset().top) {
        $('.animasi-4').addClass('animated fadeInLeft');
    }


    // if (wScroll >= $('.done-so-far').offset().top) {
    //     $('.animasi').addClass('animated fadeInLeft');
    // }
    // if (wScroll >= $('.portfolio').offset().top) {
    //     $('.animasi').addClass('animated fadeInLeft');
    // }
    // if (wScroll >= $('.skill').offset().top) {
    //     $('.animasi').addClass('animated fadeInLeft');
    // }
    // if (wScroll >= $('.call-me').offset().top) {
    //     $('.animasi').addClass('animated fadeInLeft');
    // }
});

// disini permasalahan nya sudah hampir selesai namun terdapat
// beberapa kesalahan
// disini kesalahannya salah satunya adalah saat di scroll
// animasi saat di start memang mengambil kondisi yang ditentukan
// namun ternyata tidak apply terhadap 4 fungsi lain
// dan mengikuti fungsi yang paling pertama
// sehingga perlu diadakan analisis lebih jauh