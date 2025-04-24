
 async function getPokemonImages(limit = 12) {
    
    const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const listData = await listResponse.json();
  
    const imagePromises = listData.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return {
        id :crypto.randomUUID() ,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        image: data.sprites.other["official-artwork"].front_default,
        isClicked:false
      };
    });
  
    const images = await Promise.all(imagePromises);

    return images;
  }

function shuffle(array) {

let i = array.length;
const result = [...array];

while (--i>0) {
const j = Math.floor(Math.random()*(i+1));
const temp = result[j];
result[j]=result[i];
result[i]=temp;

}

return result;
}



export {getPokemonImages,shuffle}