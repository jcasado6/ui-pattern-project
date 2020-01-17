const url = "https://pokeapi.co/api/v2/pokemon/";

let pikachu = document.querySelector('#acc1');
let pokeImg = document.querySelector('.pikachupic')

pikachu.addEventListener('click', evt => {
  evt.preventDefault()
  let value = "pikachu"
  console.log(url);
  fetch(url + value)
  .then(res => res.json())
  .then(pokemon => {
      console.log(pokemon)
      const pokemonSprite = pokemon.sprites.front_default;
      pokeImg.setAttribute('src', pokemonSprite);
  }) .catch(err => console.log(err));
}) 


let bulbasaur = document.querySelector('#acc2')
let pokeImg1 = document.querySelector('.bulbpic')

bulbasaur.addEventListener('click', evt => {
  evt.preventDefault()
  let value = "bulbasaur"
  // console.log(value)
  console.log(url);
  fetch(url + value)
  .then(res => res.json())
  .then(pokemon => {
      console.log(pokemon.sprites.front_default)
      const pokemonSprite = pokemon.sprites.front_default;
      // pokemonh2.innerText = pokemonName;
      pokeImg1.setAttribute('src', pokemonSprite);
  }) .catch(err => console.log(err));
})

let charmander = document.querySelector('#acc3')
let pokeImg2 = document.querySelector('.charpic')

bulbasaur.addEventListener('click', evt => {
  evt.preventDefault()
  let value = "charmander"
  // console.log(value)
  console.log(url);
  fetch(url + value)
  .then(res => res.json())
  .then(pokemon => {
      console.log(pokemon.sprites.front_default)
      const pokemonSprite = pokemon.sprites.front_default;
      // pokemonh2.innerText = pokemonName;
      pokeImg2.setAttribute('src', pokemonSprite);
  }) .catch(err => console.log(err));
})

let squirtle = document.querySelector('#acc4')
let pokeImg3 = document.querySelector('.squirtlepic')

squirtle.addEventListener('click', evt => {
  evt.preventDefault()
  let value = "squirtle"
  // console.log(value)
  console.log(url);
  fetch(url + value)
  .then(res => res.json())
  .then(pokemon => {
      console.log(pokemon.sprites.front_default)
      const pokemonSprite = pokemon.sprites.front_default;
      // pokemonh2.innerText = pokemonName;
      pokeImg3.setAttribute('src', pokemonSprite);
  }) .catch(err => console.log(err));
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


