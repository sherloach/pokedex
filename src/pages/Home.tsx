import { useState } from 'react';
import PokedexList from '../components/PokedexList';
import SearchBar from '../components/SearchBar';
import SelectedPokemon from '../components/PokedexList/SelectedPokemon';

const Home = () => {
  const [hidden, setHidden] = useState(false);

  const handleClosePokemonInfo = () => {
    setTimeout(() => {
      setHidden(true);
    }, 350);
  };

  const handleOpenPokemonInfo = () => {
    setTimeout(() => {
      setHidden(false);
    }, 350);
  };

  return (
    <>
      <div id="pokedex-list" className="column w-full">
        <SearchBar />
        <PokedexList handleOpenPokemonInfo={handleOpenPokemonInfo} />
      </div>
      <SelectedPokemon
        hidden={hidden}
        handleClosePokemonInfo={handleClosePokemonInfo}
      />
    </>
  );
};

export default Home;
