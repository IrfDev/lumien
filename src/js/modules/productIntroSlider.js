import Swiper, {
  Navigation, Controller, Thumbs, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Controller, Thumbs, Pagination]);

export default () => {
  const descktop =  window.matchMedia('(min-width: 992px)');
  const count = document.querySelectorAll(".intro-product__slider-thumb-img").length

  if (count <= 3) {
    document.querySelectorAll(".intro-product__slider-btn").forEach(btn => btn.style.display = "none");
  }

  if (descktop.matches) {
    let prductSliderThumb = new Swiper(".js-product-intro-thumb-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      watchSlidesProgress: true,
    });

    let prductSlider = new Swiper(".js-product-intro-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: {
        swiper: prductSliderThumb,
      },
      watchSlidesProgress: true,
      navigation: {
        nextEl:  '.js-intro-product-btn-next',
        prevEl: '.js-intro-product-btn-prev',
      },
    });
  } else {
    let prductSlider = new Swiper(".js-product-intro-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.js-product-intro-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }
}
