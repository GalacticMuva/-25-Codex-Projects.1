const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const pokemon = document.getElementById('pokemonInput').value.toLowerCase().trim();
    const card = document.getElementById('pokeCard');

    if (!pokemon) return alert("Please enter a name or ID");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if (!response.ok) throw new Error("Pokémon not found");
            return response.json();
        })
        .then(data => {
            // Update the UI with the data
            document.getElementById('pokeName').innerText = data.name.toUpperCase();
            document.getElementById('pokeImage').src = data.sprites.front_default;
            document.getElementById('pokeHeight').innerText = data.height;
            document.getElementById('pokeWeight').innerText = data.weight;

            // Show the card
            card.classList.remove('hidden');
        })
        .catch(err => {
            alert(err.message);
            card.classList.add('hidden');
        });
});