import { Header } from 'components/Layout';

import { ReactComponent as FireDividerIcon } from '@/assets/divider-fire.svg';
import { ReactComponent as BoltIcon } from '@/assets/icon-bolt.svg';
import charizardImg from '@/assets/img-charizard-min.png';
import { ReactComponent as FireTypeIcon } from '@/assets/pokemonTypes/fire.svg';
import { ReactComponent as FlyingTypeIcon } from '@/assets/pokemonTypes/flying.svg';

import Waves from './Waves/Waves';

const HeroSection = () => {
  return (
    <div className="hero-bg sm:after:pokemon-bg sm:before:pokemon-bg relative overflow-hidden sm:before:left-[-12.5rem] sm:after:right-[-12.5rem]">
      <Header />
      <div className="main-container">
        <div className="relative z-[1] mb-20 mt-14 items-center justify-between sm:mb-40 sm:mt-16 sm:flex sm:flex-col xl:flex-row">
          <div className="max-w-[37.5rem] sm:max-xl:text-center xl:max-w-[26.13rem]">
            <span className="text-2xl font-bold leading-[135%]">#006</span>
            <div className="my-2 flex gap-2 sm:max-xl:justify-center">
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
            <h1 className="text-5xl font-bold uppercase leading-[135%] xl:text-[4rem]">
              Charizard
            </h1>
            <p className="mb-6 leading-[150%]">
              Charizard resembles a large traditional European dragon. Despite
              the similarity, Charizard is explicitly a Fire- and Flying-type
              Pokémon, and not a Dragon-type, except in its &quot;Mega Charizard
              X&quot; form; However, it can learn Dragon-type attacks.
            </p>
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#FFFFFF] font-bold leading-[150%] text-[#E14318] sm:mx-auto sm:max-xl:w-52"
            >
              <BoltIcon />
              More Details
            </button>
          </div>
          <div className="before:divider-horizontal-before after:divider-horizontal-after xl:before:divider-vertical-before xl:after:divider-vertical-after static my-5 flex flex-row items-center gap-6 before:block before:h-[1px] before:w-52 before:content-[''] after:block after:h-[1px] after:w-52 after:content-[''] xl:absolute xl:left-2/4 xl:-translate-x-1/2 xl:flex-col xl:before:h-52 xl:before:w-[1px] xl:after:h-52 xl:after:w-[1px]">
            <FireDividerIcon className="h-14 w-14" />
          </div>
          <div>
            <img
              className="h-auto w-[30.5rem]"
              src={charizardImg}
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
