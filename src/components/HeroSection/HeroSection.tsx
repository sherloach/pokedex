import { Header } from 'components/Layout';

import { ReactComponent as FireDividerIcon } from '@/assets/divider-fire.svg';
import { ReactComponent as BoltIcon } from '@/assets/icon-bolt.svg';
import { ReactComponent as FireTypeIcon } from '@/assets/pokemonTypes/fire.svg';
import { ReactComponent as FlyingTypeIcon } from '@/assets/pokemonTypes/flying.svg';

import Waves from './Waves/Waves';

const HeroSection = () => {
  return (
    <div className="hero-bg relative overflow-hidden">
      <Header />
      <div className="main-container">
        <div className="mt-14 mb-20">
          <span className="text-2xl font-bold leading-[135%]">#006</span>
          <div className="my-2 flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-[#FF9900] px-2 py-1 capitalize leading-[150%]"
            >
              <FireTypeIcon />
              Fire
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-[#89BDFF] px-2 py-1 capitalize leading-[150%]"
            >
              <FlyingTypeIcon />
              Flying
            </button>
          </div>
          <h1 className="text-5xl font-bold uppercase leading-[135%]">
            Charizard
          </h1>
          <p className="mb-6 leading-[150%]">
            Charizard resembles a large traditional European dragon. Despite the
            similarity, Charizard is explicitly a Fire- and Flying-type Pokémon,
            and not a Dragon-type, except in its &quot;Mega Charizard X&quot;
            form; However, it can learn Dragon-type attacks.
          </p>
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#FFFFFF] font-bold leading-[150%] text-[#E14318]"
          >
            <BoltIcon />
            More Details
          </button>
          <div className="before:divider-horizontal-before after:divider-horizontal-after static my-5 flex flex-row items-center gap-6 before:block before:h-[1px] before:w-52 before:content-[''] after:block after:h-[1px] after:w-52 after:content-['']">
            <FireDividerIcon className="h-20 w-20" />
          </div>
          <div>
            <img
              className="h-auto w-[30.5rem]"
              src="src/assets/img-charizard-min.png"
              alt="pokemon"
            />
          </div>
        </div>
      </div>
      <Waves />
    </div>
  );
};

export default HeroSection;
