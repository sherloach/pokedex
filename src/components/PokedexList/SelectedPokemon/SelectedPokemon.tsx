import { ISelectedPokemon, IStats, stats } from '../../../const';

const SelectedPokemon: React.FC<ISelectedPokemon> = ({
  hidden,
  handleClosePokemonInfo,
}) => {
  return (
    <>
      <div
        hidden={hidden}
        id="current-pokemon-mobile-background"
        className="fixed left-0 z-[1] h-full w-full bg-[#78cd54]"
      />
      <div
        hidden={hidden}
        id="current-pokemon-mobile-close"
        className="fixed top-[10px] right-[10px] z-[2] h-[42px] cursor-pointer rounded-lg bg-[#F6F8Fc] p-[10px] duration-300"
        onTouchStart={handleClosePokemonInfo}
      >
        <img src="src/assets/close-icon.png" alt="close icon" />
      </div>

      <div
        id="current-pokemon-container"
        className={`column center container fixed left-[50%] bottom-0 z-[2] m-0 h-[82vh] translate-x-[-50%] rounded-tl-[20px] rounded-tr-[20px] bg-[#FFFFFF] px-4 text-center ${
          hidden ? 'hidden animate-slideOut' : 'animate-slideIn'
        }`}
      >
        <img
          id="current-pokemon-image"
          alt="selected pokemon"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
          className="image-pixelated absolute right-0 left-0 bottom-[77vh] mx-auto max-h-[22vh] max-w-[350px] object-contain"
          style={{ height: '114px' }}
        />

        {/* Info */}
        <div
          id="current-pokemon-info"
          className="column mt-[6vh] h-full overflow-y-scroll"
        >
          {/* Id */}
          <span id="current-pokemon-id" className="text-xs font-bold">
            #213
          </span>

          {/* Name */}
          <h2>Pikachu</h2>

          {/* types */}
          <div id="current-pokemon-types" className="row center">
            <div className="row">
              <div className="m-[5px] mt-[10px] rounded-[5px] bg-[#0E2E4C] px-[7px] py-[3px] text-[14px] font-[600] text-black opacity-[0.8]">
                shadow
              </div>
            </div>
          </div>

          {/* description */}
          <div className="row center" />
          <h4>Pokedex Entry</h4>
          <span id="current-pokemon-description">
            A strange seed was planted on its back at birth. the plant sprouts
            and grows with this pokémon.
          </span>

          {/* Height & Weight */}
          <div className="row center">
            <div className="column center m-[5px] w-full">
              <h4>Height</h4>
              <div
                id="current-pokemon-height"
                className="pokemon-info-variable-container"
              >
                0.7m
              </div>
            </div>
            <div className="column center m-[5px] w-full">
              <h4>Weight</h4>
              <div
                id="current-pokemon-height"
                className="pokemon-info-variable-container"
              >
                6.9kg
              </div>
            </div>
          </div>

          {/* Abilities */}
          <div className="column">
            <h4>Abilities</h4>
            <div className="row">
              <div
                id="current-pokemon-abilitiy-0"
                className="pokemon-info-variable-container"
              >
                Overgrow
              </div>
              <div
                id="current-pokemon-abilitiy-1"
                className="pokemon-info-variable-container"
              >
                Chlorophyll
              </div>
              <div />
            </div>
          </div>

          {/* Stats */}
          <h4>Stats</h4>
          <div className="row center">
            {Object.keys(stats).map((key) => (
              <div
                key={key}
                className="column m-[5px] rounded-[30px] bg-[#F6F8FC] p-[5px]"
              >
                <div
                  className="flex h-[25px] w-[25px] items-center justify-center rounded-[50%] text-[10px] font-bold text-white"
                  style={{ background: stats[key as keyof IStats] }}
                >
                  {key}
                </div>
                <h5 id="current-pokemon-stats-hp" className="my-[6px]">
                  84
                </h5>
              </div>
            ))}
          </div>

          {/* Evolution chain */}
          <div id="current-pokemon-evolution-chain-container">
            <h4>Evolution</h4>
            <div className="row center">
              <img
                id="current-pokemon-evolution-0"
                alt="evolution pokemon"
                className="current-pokemon-evolution-image"
                src="./src/assets/pokeball-icon.png"
              />
              <div
                id="current-pokemon-evolution-level-0"
                className="current-pokemon-evolution-level-container"
              >
                Lv. 16
              </div>
              <img
                id="current-pokemon-evolution-1"
                alt="evolution pokemon"
                className="current-pokemon-evolution-image"
                src="./src/assets/pokeball-icon.png"
              />
              <div
                id="current-pokemon-evolution-level-1"
                className="current-pokemon-evolution-level-container"
              >
                Lv. 36
              </div>
              <img
                id="current-pokemon-evolution-2"
                alt="evolution pokemon"
                className="current-pokemon-evolution-image"
                src="./src/assets/pokeball-icon.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedPokemon;
