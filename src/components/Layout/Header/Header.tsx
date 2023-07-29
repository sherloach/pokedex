const Header = () => {
  return (
    <div className="main-container ">
      <header className="flex items-center justify-between pt-6">
        <img
          className="h-12 w-32"
          src="src/assets/logo-pokemon.svg"
          alt="pokemon's logo"
        />
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
