import { IPokemonCard, ITypes, typeColors } from '../../../const';

const PokedexCard: React.FC<IPokemonCard> = ({ id, name, types }) => {
  return (
    <div className="wrapper center column relative mt-[50px] min-w-[20%] flex-[0.5] cursor-pointer border-2 border-solid border-white pt-[30px] duration-100 hover:border-[#e0e0e0] md:m-[10px] lg:mt-[60px]">
      <img
        className="image-pixelated absolute top-[-55px] duration-100"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon img"
      />
      <span className="text-sm font-bold text-[#8F9396]">N° {id}</span>
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="row">
        {types.map((type, idx) => (
          <div
            key={idx}
            style={{ background: typeColors[type as keyof ITypes] }}
            className="m-[5px] mt-[10px] rounded-[5px] py-[3px] px-[7px] text-sm font-semibold text-black opacity-80"
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokedexCard;
