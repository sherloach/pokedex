import { ReactComponent as BoltIcon } from '@/assets/icon-bolt.svg';
import { ReactComponent as RulerIcon } from '@/assets/icon-ruler.svg';
import { ReactComponent as WeightIcon } from '@/assets/icon-weight.svg';

import { PokemonType } from '../PokemonType';

const PokedexList = () => {
  return (
    <div className="main-container">
      <div className="mt-48 flex">
        {/* Pokemon Card */}
        <div
          className="relative flex w-full flex-col items-center rounded-3xl border-l border-t border-solid border-l-[#24293f] border-t-[#24293f] bg-[#060b2826] pt-28"
          style={{ borderImage: 'initial' }}
        >
          {/* Card Overplay */}
          <div
            // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
            className="absolute left-0 top-0 -z-[1] h-full w-full overflow-hidden rounded-3xl after:absolute after:left-1/2 after:top-0 after:block after:h-[12.5rem] after:w-[12.5rem] after:-translate-x-1/2 after:bg-[#1cd80e] after:blur-[120px] after:transition-all"
            style={{ backfaceVisibility: 'hidden' }}
          />

          {/* Pokemon image */}
          <div className="absolute -top-40">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
              width="256"
              height="256"
              alt="pokemon"
            />
          </div>

          {/* Pokemon information */}
          <span className="text-xl font-bold leading-[135%]">#001</span>
          <span className="mb-3 mt-1 items-center text-[2rem] font-bold capitalize leading-[135%]">
            Bulbasaur
          </span>
          <div className="flex gap-2">
            <PokemonType type="grass" />
            <PokemonType type="poison" />
          </div>
          <div className="mb-8 mt-6 flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <WeightIcon />
                <span className="text-base font-bold">6.9 kg</span>
              </div>
              <span>Weight</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <RulerIcon />
                <span className="text-base font-bold">0.7 m</span>
              </div>
              <span>Height</span>
            </div>
          </div>

          {/* Detail button */}
          <button
            type="button"
            className="flex h-12 w-[100%] items-center justify-center gap-2 rounded-ee-3xl rounded-es-3xl bg-[#1cd80e] text-base font-bold text-white"
          >
            <BoltIcon />
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokedexList;
