import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="row wrapper my-6 md:mx-2.5 md:my-8">
      <input
        type="text"
        placeholder="Search your Pokemon"
        className="mr-1 flex-1 border-none text-[14px] outline-none md:text-[18px]"
      />
      <div className="center h-[40px] w-[40px] cursor-pointer rounded-lg bg-[#ff5350] text-lg text-white shadow-[5px_5px_15px_#ff535088] hover:opacity-80 hover:shadow-[3px_3px_13px_#ff53509c]">
        <FaSearch style={{ fontSize: '28px' }} />
      </div>
    </div>
  );
};

export default SearchBar;
