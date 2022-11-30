import { IPokemonList } from '../../const';
import PokedexCard from './PokedexCard';

const PokedexList: React.FC<IPokemonList> = ({ handleOpenPokemonInfo }) => {
  return (
    <div className="xs:grid xs:grid-cols-2 xs:gap-3 sm:grid-cols-3">
      <PokedexCard handleOpenPokemonInfo={handleOpenPokemonInfo} />
      <PokedexCard handleOpenPokemonInfo={handleOpenPokemonInfo} />
      <PokedexCard handleOpenPokemonInfo={handleOpenPokemonInfo} />
      <PokedexCard handleOpenPokemonInfo={handleOpenPokemonInfo} />
      <PokedexCard handleOpenPokemonInfo={handleOpenPokemonInfo} />
      <PokedexCard handleOpenPokemonInfo={handleOpenPokemonInfo} />
    </div>
  );
};

export default PokedexList;
