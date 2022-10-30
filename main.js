const btnElement = document.querySelector('.js-button');
const pokeNameElement = document.querySelector('.js-pokemonName');
const pokeImgElement = document.querySelector('.js-pokemonImg');
// const arrPokemon = [
//   'Pikachu',
//   'charmander',
//   'ninetales',
//   'bulbasaur',
//   'vulpix',
//   'persian',
//   'articuno',
//   'arcanine',
// ];
const arrPokemon = [
  {
    naMe: 'Pikachu',
    image:
      'https://www.pngall.com/wp-content/uploads/5/Pikachu-PNG-Download-Image.png',
  },
  {
    naMe: 'Charizard',
    image:
      'https://pm1.narvii.com/6267/89193c56fc57a3647097fbf5b42023ff94e93b6b_hq.jpg',
  },
  {
    naMe: 'Ninetales',
    image:
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/3/34/Ninetales.jpg?width=960',
  },
  {
    naMe: 'Blastoise',
    image:
      'http://pm1.narvii.com/6395/7b32002fbd226d5476ac4c624b2683ec25698023_00.jpg',
  },
];

const getRandomElementFromArray = (array) => {
  const randomNumber = Math.round(Math.random() * arrPokemon.length);
  const result = array[randomNumber];
  return result;
};
console.log(getRandomElementFromArray(arrPokemon));

btnElement.addEventListener('click', (event) => {
  const pokemon = getRandomElementFromArray(arrPokemon);

  console.log(getRandomElementFromArray(arrPokemon));
  pokeNameElement.innerHTML = `Te elijo a ti, ¡${pokemon.naMe}!`;
  pokeImgElement.src = pokemon.image;
});

// function getRandomElementFromArray(array) {
//   const randomNumber = Math.round(Math.random() * arrPokemon.length);
//   const result = array[randomNumber];
//   return result;
// }
