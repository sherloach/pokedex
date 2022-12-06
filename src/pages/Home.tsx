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
    setHidden(true);
  };

  const handleOpenPokemonInfo = () => {
    setTimeout(() => {
      setHidden(false);
    }, 350);
    setHidden(false);
  };

  return (
    <>
      <div id="pokedex-list" className="column w-full lg:mr-[365px]">
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
