const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

console.log("A pokemon list where4 their ids are divisible by 3");
const pokemonIdsDivisibleBy3 = pokemon.filter(poke => poke.id % 3 === 0);
console.log(pokemonIdsDivisibleBy3);

console.log("\nAn array of only fire type pokemon");
const firePokemon = pokemon.filter(poke => poke.types.includes("fire"));
console.log(firePokemon);

console.log("\nAn array of pokemon with more than one type");
const multiTypePokemon = pokemon.filter(poke => poke.types.length > 1);
console.log(multiTypePokemon);

console.log("\nAn array of pokemon names");
const pokemonNames = pokemon.map(poke => poke.name);
console.log(pokemonNames);

console.log("\nAn array of pokemon names whose id is greater than 99");
const morePokemonNames = pokemon.filter(poke => poke.id > 99).map(poke => poke.name);
console.log(morePokemonNames);

console.log("\nAn array of pokemon names of poison pokemon");
const poisonPokemonNames = pokemon.filter(poke => poke.types.includes("poison")).map(poke => poke.name);
console.log(poisonPokemonNames);

console.log("\nAn array of the first type of all pokemon whose second type is flying");
const firstPokeTypeOfFlyingPokemon = pokemon.filter(poke => poke.types[1] === "flying").map(poke => poke.types[0]);
console.log(firstPokeTypeOfFlyingPokemon);

console.log("\nCount the number of normal type pokemon");
const normalPokemonCount = pokemon.filter(poke => poke.types.includes("normal")).length;
console.log(normalPokemonCount);

console.log("\nAll pokemon but id 148");
const allPokemonBut148 = pokemon.filter(poke => poke.id !== 148);
console.log(allPokemonBut148);

console.log("\nAn array of all pokemon with id 35 pokemon being changed from normal to fairy");
pokemon.forEach(poke => poke.id === 35 ? poke.types[0] = "fairy" : poke);
console.log(pokemon);

