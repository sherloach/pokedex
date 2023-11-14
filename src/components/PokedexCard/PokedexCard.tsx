import { ReactComponent as BoltIcon } from '@/assets/icon-bolt.svg';
import { ReactComponent as RulerIcon } from '@/assets/icon-ruler.svg';
import { ReactComponent as WeightIcon } from '@/assets/icon-weight.svg';
import { pokemonTypes } from '@/constants';
import { Pokemon } from '@/types';
import { formatPokemonId } from '@/utils';

import { PokemonType } from '../PokemonType';

export interface IPokemonCard {
  pokemon: Pokemon;
}

const PokedexCard: React.FC<IPokemonCard> = ({ pokemon }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  return (
    <div
      className="relative flex w-full flex-col items-center rounded-3xl border-l border-t border-solid border-l-[#24293f] border-t-[#24293f] bg-[#060b2826] pt-28"
      style={{ borderImage: 'initial' }}
    >
      {/* Card Overplay */}
      <div
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="absolute left-0 top-0 -z-[1] h-full w-full overflow-hidden rounded-3xl "
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <div
          className="absolute left-1/2 top-0 block h-[12.5rem] w-[12.5rem] -translate-x-1/2 blur-[120px] transition-all"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Pokemon image */}
      <div className="absolute -top-40">
        <img src={imgUrl} width="256" height="256" alt="pokemon" />
      </div>

      {/* Pokemon information */}
      <span className="text-xl font-bold leading-[135%]">
        {formatPokemonId(pokemon.id)}
      </span>
      <span className="mb-3 mt-1 items-center text-[2rem] font-bold capitalize leading-[135%]">
        {pokemon.name}
      </span>
      <div className="flex gap-2">
        {pokemon.types.map(({ type }) => (
          <PokemonType key={type.name} type={type.name} />
        ))}
      </div>
      <div className="mb-8 mt-6 flex gap-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <WeightIcon />
            <span className="text-base font-bold">
              {`${pokemon.weight / 10}`} kg
            </span>
          </div>
          <span>Weight</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <RulerIcon />
            <span className="text-base font-bold">
              {`${pokemon.height / 10}`} m
            </span>
          </div>
          <span>Height</span>
        </div>
      </div>

      {/* Detail button */}
      <button
        type="button"
        className="flex h-12 w-[100%] items-center justify-center gap-2 rounded-ee-3xl rounded-es-3xl text-base font-bold text-white"
        style={{ backgroundColor: color }}
      >
        <BoltIcon />
        Details
      </button>
    </div>
  );
};

export default PokedexCard;
