nextBtn = document.querySelector('.next');
prevBtn = document.querySelector('.prev');
card0 = document.getElementById('card0');
card1 = document.getElementById('card1');
card2 = document.getElementById('card2');

nextBtn.addEventListener('click', function () {
    console.log('clicked');
    console.log(card0.classList)
    card0.classList.remove('cardPrev')
    card1.classList.add('cardNext')

})