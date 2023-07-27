import { useEffect, useState } from 'react';

import PokedexList from '../components/PokedexList';
import SelectedPokemon from '../components/PokedexList/SelectedPokemon';
import SearchBar from '../components/SearchBar';
import { APIs, IPokemonObj } from '../const';
import useToggle from '../hooks/useToggle';
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
