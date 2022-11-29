const PokedexCard = () => {
  return (
    <div className="wrapper center column relative mt-[50px] min-w-[20%] flex-[0.5] cursor-pointer border-2 border-solid border-white pt-[30px] duration-100 hover:border-[#e0e0e0] md:m-[10px]">
      <img
        className="image-pixelated absolute top-[-55px] duration-100"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`}
        alt="pokemon img"
      />
      <span className="text-sm font-bold text-[#8F9396]">N° ${123}</span>
      <h3 className="text-xl font-bold">Pokemon</h3>
      <div className="row">
        <div className="m-[5px] mt-[10px] rounded-[5px] bg-[#BC5442] py-[3px] px-[7px] text-sm font-semibold text-black opacity-80">
          poison
        </div>
      </div>
    </div>
  );
};

export default PokedexCard;
