const baseUrl = "https://pokeapi.co/api/v2";
const pokeName = document.getElementById("pokeName");
const pokeType = document.getElementById("pokeType");
const img = document.querySelector("img");
var index = 1;

function catchPokemon(pokemonsName) {
  let url = `${baseUrl}/pokemon/${pokemonsName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      pokeName.innerHTML = data.name;
      pokeType.innerText = data.types[0].type.name;
      img.src = data.sprites.front_default;
      index = data.id;
    })
    .catch((err) => console.log(err));
}

catchPokemon(1);

document.querySelector("#next").addEventListener("click", () => {
  index++;
  catchPokemon(index);
});
document.querySelector("#previous").addEventListener("click", () => {
  index--;
  catchPokemon(index);
});

document.querySelector(".submit").addEventListener("click", () => {
  const pokemon = document.getElementById("searchPokemon").value;
  catchPokemon(pokemon);
  document.querySelector("#searchPokemon").value = "";
});
