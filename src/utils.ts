/* eslint-disable no-await-in-loop */
import { APIs, IPokemonObj, IPokemonResponse } from './const';

export const getPokemonId = (url: string) => {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
};

export const getAllPokemonWithNameAndTypes = async (
  pokemonResult: IPokemonResponse[]
): Promise<IPokemonObj> => {
  const pokemons: IPokemonObj = {};

  pokemonResult.map((pokemon: IPokemonResponse) => {
    const id = getPokemonId(pokemon.url);
    const newPokemon = {
      name: pokemon.name,
      types: [],
    };
    pokemons[id] = newPokemon;

    return pokemons;
  });

  for (let i = 0; i < 18; i++) {
    const response = await (await fetch(APIs.type + (i + 1))).json();
    const pokemonInType = response?.pokemon;

    for (let j = 0; j < pokemonInType.length; j++) {
      const pokemonId = getPokemonId(pokemonInType[j].pokemon.url);

      if (pokemons[pokemonId]) {
        pokemons[pokemonId].types.push(response.name);
      }
    }
  }

  return pokemons;
};
