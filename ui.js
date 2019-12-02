// console.log('hello world!')

// const url = "https://pokeapi.co/api/v2/pokemon/"

// //targeting the form to attach the event handler
// const dropdown = document.querySelector('dropdown');
// //targeting the form input to get the value to search for in the API request
// const formInput = form.querySelector('input.pokemonName');
// //targeting the element because i want to update with the API data
// const pokemonh2 = document.querySelector('h2');

// const pokemonImg = document.querySelector('img');

// //add event listener to the form 
// dropdown.addEventListener('click', evt => {
//     evt.preventDefault()
//     // const value = formInput.value
//     // console.log(value)
//     console.log(url);
//     console.log(url + value);
//     fetch(url + value)
//     .then(res => res.json())
//     .then(pokemon => {
//         console.log(pokemon, pokemon.name);
//         const pokemonName = pokemon.name;
//         const pokemonSprite = pokemon.sprites.front_default;
//         pokemonh2.innerText = pokemonName;
//         pokemonImg.setAttribute('src', pokemonSprite);
//     }) .catch(err => console.log(err));
// })

// const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
// // const url = "http://pokeapi.salestock.net/api/v2/pokemon/7"
// // use second url as a backup only
// const pikachu = document.querySelector('#pikachu');
// const pokemonImg = document.querySelector('.pikachu')
// const formInput = document.querySelector('input.pokemonName');

// pikachu.addEventListener('click', evt => {
//   evt.preventDefault()
//   // const value = formInput.value
//   // console.log(value)
//   console.log(url);
//   // console.log(url + value);
//   fetch(url)
//   .then(res => res.json())
//   .then(pokemon => {
//       console.log(pokemon.sprites.front_default)
//       const pokemonSprite = pokemon.sprites.front_default;
//       // pokemonh2.innerText = pokemonName;
//       pokemonImg.setAttribute('src', pokemonSprite);
//   }) .catch(err => console.log(err));
// }) 


