const Header = () => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <img
        className="h-11 w-28"
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
    </div>
  );
};

export default Header;
