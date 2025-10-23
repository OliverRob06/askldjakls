
//horizontal scroll script
const scrollContainer = document.querySelector(".horizontal-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    const scrollSpeed = 15;
    scrollContainer.scrollBy({
        left: evt.deltaY * scrollSpeed
    });
});


//card slider script
const swiper = new Swiper('.slide-content', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2.5,

  

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));