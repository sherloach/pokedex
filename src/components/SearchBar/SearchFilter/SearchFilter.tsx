import { PokemonType } from '@/components/PokemonType';
import { Slide } from '@/components/SearchBar/Slide';
import { pokemonTypes } from '@/constants';

const SearchFilter = () => {
  return (
    <div className="mb-6">
      <span className="mb-4 block text-2xl font-bold leading-[135%]">
        Search by types
      </span>
      <Slide>
        {pokemonTypes.map(({ name }) => (
          <PokemonType key={name} type={name} />
        ))}
      </Slide>
    </div>
  );
};

export default SearchFilter;
