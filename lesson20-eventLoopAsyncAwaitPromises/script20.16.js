async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://okeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      // throw new Error('There is a problem fetching url:', response.status);
    }
    const data = await response.json();
    const pokemon = {
      "id": data.id,
      "name": data.name,
      "height": data.height,
      "weight": data.weight,
      "types": data.types.map(type => type.type.name)
    };
    console.log(pokemon);
  } catch (error) {
    console.error(`
      Failed to fetch Pokemon: ${error.message}.
      The error path: ${error.path}.
      The error code: ${error.code}.
      `);
  };
}



fetchPokemon(2);
