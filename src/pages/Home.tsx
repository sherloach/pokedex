import PokedexList from '../components/PokedexList';
import SearchBar from '../components/SearchBar';
import SelectedPokemonMobile from '../components/SelectedPokemon';

const Home = () => {
  return (
    <>
      <div id="pokedex-list" className="column w-full">
        <SearchBar />
        <PokedexList />
      </div>
      <SelectedPokemonMobile />
    </>
  );
};

export default Home;
