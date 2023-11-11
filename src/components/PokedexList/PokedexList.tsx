import PokedexCard from '@/components/PokedexCard';

const PokedexList = () => {
  return (
    <div className="main-container">
      <div className="mt-48 gap-x-4 gap-y-40 sm:grid sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
        {/* Pokemon Card */}
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
      </div>
    </div>
  );
};

export default PokedexList;
