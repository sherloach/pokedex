import { Slide } from '@/components/Slide';

const SearchFilter = () => {
  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${'dark'}.svg`,
    import.meta.url
  ).href;

  return (
    <div className="mb-6">
      <span className="mb-4 block text-2xl font-bold leading-[135%]">
        Search by types
      </span>
      <Slide>
        {/* Pokemon Type loop  */}
        <div className="flex gap-2">
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#7bcf00] px-2 py-1 text-base font-normal capitalize"
          >
            <img src={imgUrl} alt="pokemon's type" />
            Dark
          </button>
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#7bcf00] px-2 py-1 text-base font-normal capitalize"
          >
            <img src={imgUrl} alt="pokemon's type" />
            Dark
          </button>
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#7bcf00] px-2 py-1 text-base font-normal capitalize"
          >
            <img src={imgUrl} alt="pokemon's type" />
            Dark
          </button>
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#7bcf00] px-2 py-1 text-base font-normal capitalize"
          >
            <img src={imgUrl} alt="pokemon's type" />
            Dark
          </button>
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#7bcf00] px-2 py-1 text-base font-normal capitalize"
          >
            <img src={imgUrl} alt="pokemon's type" />
            Dark
          </button>
        </div>
      </Slide>
    </div>
  );
};

export default SearchFilter;
