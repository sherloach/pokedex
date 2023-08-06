import { ReactComponent as SearchIcon } from '@/assets/icon-search.svg';

const SearchBox = () => {
  return (
    <form className="flex w-full rounded-lg transition duration-300 hover:shadow-[0_0_0_4px_rgb(47,90,255,0.4)] md:w-[30.5rem]">
      <input
        type="text"
        placeholder="Search Pokémon"
        className="flex-1 rounded-s-lg border-[0.13rem] border-solid border-[#2f5aff] bg-transparent p-4 text-base font-normal leading-[150%] outline-none placeholder:text-[#ffffff40]"
      />
      <button type="button" className="w-14 rounded-e-lg bg-[#2f5aff]">
        <SearchIcon className="mx-auto" />
      </button>
    </form>
  );
};

export default SearchBox;
