


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const state = document.getElementById('state');
const iinfog = document.getElementById('info');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.rendom__btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {

    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const item = data.results[currentItem]
            console.log(item)
            img.src = item.picture.medium
            author.textContent = item.name.first + ' ' + item.name.last;
            state.textContent = item.location.state + ', ' + item.location.country
            info.textContent = `Hello, my name is ${item.name.first} and I am from ${item.location.country}. You can contact me by Phone: ${item.cell}, or Email: ${item.email}. Can't wait to hear back from you!`
        });



})