document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemonDetails = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center">${data.name}</h5>
                        <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
                        <p class="card-text">Height: ${data.height}</p>
                        <p class="card-text">Weight: ${data.weight}</p>
                        <p class="card-text">Base Experience: ${data.base_experience}</p>
                    </div>
                </div>
            `;
            document.getElementById('pokemon-details').innerHTML = pokemonDetails;
        })
        .catch(error => {
            document.getElementById('pokemon-details').innerHTML = '<p class="text-danger">Please try again.</p>';
        });
});
