var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 5000,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },
  });