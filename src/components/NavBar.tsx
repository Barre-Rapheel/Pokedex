import React from 'react';

interface NavBarProps {
  pokemonList: { name: string; imgSrc?: string }[];
  setPokemonIndex: (index: number) => void;
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(index); // Met à jour l'index du Pokémon
            // Affiche l'alerte si le Pokémon est Pikachu
            if (pokemon.name.toLowerCase() === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;




