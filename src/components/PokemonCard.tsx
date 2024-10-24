

  // Définition de l'interface Pokemon
interface Pokemon {
  name: string;       // name est obligatoire
  imgSrc?: string;    // imgSrc est optionnel
}

// Typage des props dans le composant PokemonCard
function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p> // Si l'image n'existe pas, afficher "???"
      )}
      <figcaption>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</figcaption>
    </figure>
  );
}

export default PokemonCard;  