const menuButton = document.querySelector('.menuIcon');
const nav = document.querySelector('nav');
const body = document.querySelector('body');

menuButton.addEventListener('click', () => {
    if (nav.style.right !== '0px') {
        nav.style.display = 'flex';
        nav.style.right = '0px';
        menuButton.style.color = 'red';
        body.style.overflow = 'hidden';
    } else {
        nav.style.display = 'none';
        nav.style.right = '-100vw';
        menuButton.style.color = 'white';
        body.style.overflow = 'auto';
    }
});

window.addEventListener("resize", () => {
    if (body.clientWidth > 850) {
        nav.style.display = 'flex';
    }
});