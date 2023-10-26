const swiper = new Swiper(".sample-slider", {
  loop: true, //loop
  slidesPerView: 3, //number of slides to show
  centeredSlides: true, //put acctive slide center
  spaceBetween: 32, //space between slides
  autoplay: {
    //autoplay
    delay: 2000,
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 1.75,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  navigation: {
    //navigation（arrows）
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
