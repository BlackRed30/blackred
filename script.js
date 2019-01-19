// $(window).scroll(function () {
// var wScroll = $(this).scrollTop();

// const ambil_introduction = document.querySelector('.animasi_introduction')
// ambil_introduction.classList.add('animated', 'fadeInRight')

// });

// event pada saat link di klik
$(window).on('scroll', function () {

    wScroll = $(this).scrollTop();

    if (wScroll == $('.introduction').offset().top) {
        const ambil_introduction = document.querySelector('.animasi');
        ambil_introduction.classList.add('animated', 'fadeInRight');
    }

    //  pindahkan scroll

    // $('window').scroll(function () {
    //     var wScroll = $(this).scrollTop();

    //     if (wScroll == elemenTujuan.offset().top) {

    //     }
    // });

});

//permasalahan disini inginnya saat digeser maka akan berjaan javascriptnya
//namun disini saat digeser animasi tidak jalan saat di geser
//padaha sebelumnya dapat dilakukan tanpa menggunakan if
//namun kelemahan bila tanpa if javascript akan langsung berjalan
//hanya di scroll sekali maka javascript langsung berjalan semua, tidak menunggu saat ada di halaman tertentu