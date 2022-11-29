import PokedexCard from '../PokedexCard';

const PokedexList = () => {
  return (
    <div className="xs:grid xs:grid-cols-2 xs:gap-3 sm:grid-cols-3">
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
      <PokedexCard />
    </div>
  );
};

export default PokedexList;
