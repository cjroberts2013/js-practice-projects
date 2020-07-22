


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const state = document.getElementById('state');
const iinfog = document.getElementById('info');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random__btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {

    fetch('https://randomuser.me/api/?results=8')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            showPerson(currentItem);

            nextBtn.addEventListener('click', function () {
                currentItem++;
                if (currentItem > data.results.length - 1) {
                    currentItem = 0
                }
                showPerson(currentItem)
            });

            prevBtn.addEventListener('click', function () {
                currentItem--;
                if (currentItem < 0) {
                    currentItem = data.results.length - 1
                }
                showPerson(currentItem)
            });

            randomBtn.addEventListener('click', function () {
                currentItem = Math.floor(Math.random() * data.results.length);
                showPerson(currentItem);
            })


            function showPerson(person) {
                const item = data.results[person]
                console.log(item)
                img.src = item.picture.medium
                author.textContent = item.name.first + ' ' + item.name.last;
                state.textContent = item.location.state + ', ' + item.location.country
                info.textContent = `Hello, my name is ${item.name.first} and I am from ${item.location.country}. You can contact me by Phone: ${item.cell}, or Email: ${item.email}. Can't wait to hear back from you!`
            }
        });



})


