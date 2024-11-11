const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];


// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
let isDragging = false, startX, startScrollLeft;

const cardPreView = Math.round(carousel.offsetWidth / firstCardWidth);

// biome-ignore lint/complexity/noForEach: <explanation>
carouselChildrens.slice(-cardPreView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
});

// biome-ignore lint/complexity/noForEach: <explanation>
carouselChildrens.slice(0, -cardPreView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
});




// biome-ignore lint/complexity/noForEach: <explanation>
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
;}

const dragging = (e) => {
   if(!isDragging) return;
//    update scroll position
   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
carousel.classList.remove("no-transition");
    }else if(Math.ceil(carousel.scrollLeft)=== carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}


carousel.addEventListener('mousedown', dragStart );
carousel.addEventListener('mousemove', dragging );
document.addEventListener('mouseup', dragStop );
carousel.addEventListener('scroll', infiniteScroll);




// testimonials slider
