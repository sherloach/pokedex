import { APIs } from '@/constants';

import fetchPokemon from './fetchPokemon';

const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);
  const response = await fetch(APIs.pokemons + offset);
  const data = await response.json();

  const promises = data.results.map(
    async (pokemon: { name: string }) => (await fetchPokemon(pokemon.name)).data
  );
  const pokemonList = Promise.all(promises);

  return pokemonList;
};

export default fetchPokemonList;
