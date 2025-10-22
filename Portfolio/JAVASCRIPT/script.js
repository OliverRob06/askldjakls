const scrollContainer = document.querySelector(".horizontal-scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    const scrollSpeed = 15;
    scrollContainer.scrollBy({
        left: evt.deltaY * scrollSpeed
    });
});
