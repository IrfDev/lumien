import Swiper, {
  Navigation, Controller, Thumbs, Pagination, EffectFade
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Controller, Thumbs, Pagination, EffectFade]);

export default () => {
  let aboutSilder = new Swiper(".page-about-history__date-slider", {
    slidesPerView: 'auto',
    spaceBetween: 25,
    watchSlidesProgress: true,
    freeMode: true,
    allowTouchMove: false,
    breakpoints: {
      280: {
        spaceBetween: 15,
        allowTouchMove: true,
      },
      1025: {
        spaceBetween: 25,
        allowTouchMove: false,
      },
    },
  });

  let aboutSilderThumb = new Swiper(".page-about-history__text-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    freeMode: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.js-about-btn-next',
      prevEl: '.js-about-btn-prev',
    },
    thumbs: {
      swiper: aboutSilder,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
      slideChange: (swiper) => {
        if (swiper.activeIndex !== swiper.thumbs.swiper.activeIndex) {
          aboutSilder.slideTo(swiper.activeIndex + swiper.thumbs.swiper.activeIndex - swiper.thumbs.swiper.activeIndex);
        };
      },
    },
  });

  aboutSilder.on('slideChange', function (swiper) {
    aboutSilderThumb.slideTo(swiper.activeIndex);
  });

  // aboutSilder.controller.control = aboutSilderThumb;
  // aboutSilderThumb.controller.control = aboutSilder;
}
