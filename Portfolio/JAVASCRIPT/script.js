const scrollContainer = document.querySelector(".horizontal-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    const scrollSpeed = 15;
    scrollContainer.scrollBy({
        left: evt.deltaY * scrollSpeed
    });
});



const swiper = new Swiper('.slide-content', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2.5,

  

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  