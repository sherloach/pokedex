import { APIs } from '@/constants';
import { Pokemon } from '@/types';

const fetchPokemon = async (pokemon: string) => {
  try {
    const response = await fetch(APIs.pokemon + pokemon);

    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon.');
    }

    const data: Pokemon = await response.json();

    return {
      response,
      data,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      data: null,
      error,
    };
  }
};

export default fetchPokemon;
