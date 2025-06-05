fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(response => response.json())
  .then(data => {
    const pokemonList = data.results;
    const tbody = document.getElementById('pokemon-body');

    pokemonList.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(details => {
          const name = details.name;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`;

          const row = document.createElement('tr');
          row.innerHTML = `
            <td><img src="${imageUrl}" alt="${name}"></td>
            <td>${name.charAt(0).toUpperCase() + name.slice(1)}</td>
          `;
          tbody.appendChild(row);
        });
    });
  })
  .catch(error => {
    console.error('Error al cargar los Pokémon:', error);
  });