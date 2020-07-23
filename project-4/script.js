const navToggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    console.log(links.classList.toggle('show__links'))
})