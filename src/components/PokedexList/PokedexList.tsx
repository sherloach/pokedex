import { Pagination } from '@/components/Pagination';
import { PokedexCard } from '@/components/PokedexCard';

const PokedexList = () => {
  return (
    <div className="main-container">
      <div className="mt-48 grid gap-x-4 gap-y-40 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
        {/* Pokemon Card */}
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
      </div>
      <Pagination />
    </div>
  );
};

export default PokedexList;
