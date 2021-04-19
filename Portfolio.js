const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

/*Nav transition*/

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/*Removing the chance of nav opening off screen */

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})