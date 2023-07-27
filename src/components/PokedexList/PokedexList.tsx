import { IPokemonList } from '@/types';

import PokedexCard from '../PokedexCard';

const PokedexList: React.FC<IPokemonList> = ({
  handleOpenPokemonInfo,
  pokemons,
}) => {
  return (
    <div className="xs:grid xs:grid-cols-2 xs:gap-5 sm:grid-cols-3 lg:gap-0 xl:grid-cols-4">
      {Object.keys(pokemons).map((key) => (
        <div
          key={key}
          role="button"
          aria-hidden
          onClick={handleOpenPokemonInfo}
        >
          <PokedexCard
            id={key}
            name={pokemons[key].name}
            types={pokemons[key].types}
          />
        </div>
      ))}
    </div>
  );
};

export default PokedexList;
