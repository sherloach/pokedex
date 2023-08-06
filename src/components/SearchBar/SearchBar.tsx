import { HomeButton } from './HomeButton';
import { SearchBox } from './SearchBox';
import { SearchFilter } from './SearchFilter';

const SearchBar = () => {
  return (
    <div className="main-container">
      <div className="mb-12 mt-14">
        <HomeButton />
        <div className="mt-5 items-center justify-between gap-6 md:flex">
          <SearchFilter />
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
