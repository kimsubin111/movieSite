var swiper = new Swiper(".hero", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});

var swiper = new Swiper(".slider2", {
    slidesPerView: 1.4,
    spaceBetween: 20,
    breakpoints: {
        601: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        961: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
});
