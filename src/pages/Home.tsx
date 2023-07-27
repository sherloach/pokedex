import { PokedexList } from 'components';
import { useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';
import SelectedPokemon from '../components/SelectedPokemon';
import useToggle from '../hooks/useToggle';
import { APIs, IPokemonObj } from '../types';
import { getAllPokemonWithNameAndTypes } from '../utils';

const Home = () => {
  const [isOpen, toggler] = useToggle();
  const [pokemons, setPokemon] = useState<IPokemonObj>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await (await fetch(APIs.pokemon)).json();
      const pokemonData = await getAllPokemonWithNameAndTypes(response.results);
      setPokemon(pokemonData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="pokedex-list" className="column w-full lg:mr-[365px]">
        <SearchBar />
        <PokedexList handleOpenPokemonInfo={toggler} pokemons={pokemons} />
      </div>
      <SelectedPokemon isOpen={isOpen} toggler={toggler} />
    </>
  );
};

export default Home;
