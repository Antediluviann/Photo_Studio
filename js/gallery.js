const element = document.querySelector(".container");
panzoom(element, {
       minZoom: 1,
       maxZoom: 1
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

TweenMax.from(".menu-btn", 1.4, {
       delay: 1.4,
       opacity: 0,
       y: 20,
       ease: Expo.easeInOut
   });