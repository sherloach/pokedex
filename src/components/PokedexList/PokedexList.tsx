import { useEffect, useState } from 'react';

import fetchPokemonList from '@/api/fetchPokemonList';
import { Pagination } from '@/components/Pagination';
import { PokedexCard } from '@/components/PokedexCard';
import { Pokemon } from '@/types';

const PokedexList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);

  return (
    <div className="main-container">
      <div className="mb-36">
        <div className="mt-48 grid gap-x-4 gap-y-40 sm:grid-flow-row md:grid-cols-2 md:gap-y-48 lg:grid-cols-3">
          {/* Pokemon Card */}
          {pokemonList.map((pokemon) => (
            <PokedexCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default PokedexList;
