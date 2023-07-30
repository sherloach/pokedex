import { ReactComponent as PokemonLogo } from '@/assets/logo-pokemon.svg';

const Header = () => {
  return (
    <div className="main-container ">
      <header className="flex items-center justify-between pt-6">
        <PokemonLogo className="h-12 w-32 xl:h-16 xl:w-[10rem]" />
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://github.com/sherloach"
          rel="noreferrer"
        >
          <img src="src/assets/logo-github.svg" alt="github's icon" />
        </a>
      </header>
    </div>
  );
};

export default Header;
