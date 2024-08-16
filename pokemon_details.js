document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pokemonName = urlParams.get('name');

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
Pokémon
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
            const types = data.types.map(type => type.type.name).join(', ');
            const stats = data.stats.map(stat => `<p>${stat.stat.name}: ${stat.base_stat}</p>`).join('');

            const pokemonDetails = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center">${data.name}</h5>
                        <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
                        <p class="card-text">Height: ${data.height}</p>
                        <p class="card-text">Weight: ${data.weight}</p>
                        <p class="card-text">Base Experience: ${data.base_experience}</p>
                        <p class="card-text">Abilities: ${abilities}</p>
                        <p class="card-text">Types: ${types}</p>
                        ${stats}
                    </div>
                </div>
            `;
            document.getElementById('pokemon-details').innerHTML = pokemonDetails;
        })
        .catch(error => {
            document.getElementById('pokemon-details').innerHTML = '<p class="text-danger">Please try again.</p>';
        });
});
