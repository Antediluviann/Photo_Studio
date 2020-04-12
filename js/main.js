/* GREENSOCK ANIMATIONS */

TweenMax.from(".gallery", 1.6, {
    delay: 0.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 1.6, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".menu-btn", 1.4, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".contact", 1.4, {
    delay: 1,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".tag", 1.4, {
    delay: 1,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".e-class", 2, {
    delay: 1.6,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".year", 2, {
    delay: 1.6,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".add", 2, {
    delay: 1,
    opacity: 0,
    x: -40,
    rotation: 90,
    ease: Expo.easeInOut
});

TweenMax.from(".arrow-left", 2, {
    delay: 2.8,
    opacity: 0,
    x: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".arrow-right", 2, {
    delay: 2.8,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});


TweenMax.from(".line", 2, {
    delay: 2.8,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
    delay: 2.8,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

TweenMax.staggerFrom(".about-text", 2, {
    delay: 2.8,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);

/* HAMBURGER BAR */ 

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