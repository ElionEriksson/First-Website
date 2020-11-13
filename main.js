const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('clck', () => {
        nav.classList.toggle('nav-active');
    });
}

const app = () => {
    navslide();
}

// https://www.youtube.com/watch?v=gXkqy0b4M5g