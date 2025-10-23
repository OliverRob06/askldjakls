const swiper = new Swiper('.slide-content', {
    loop: true,
    spaceBetween: 20,
        breakpoints: {
        640: { // screens >= 640px
            slidesPerView: 1,
        },
        768: { // screens >= 768px
            slidesPerView: 2,
        },
        1024: { // screens >= 1024px
            slidesPerView: 3,
        },
    },
  

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  