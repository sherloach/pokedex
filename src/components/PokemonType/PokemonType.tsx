import { pokemonTypes } from '@/constants';

interface IPokemonType {
  type: string;
}

const PokemonType = ({ type }: IPokemonType) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  const imgUrl = new URL(
    `/src/assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return (
    <button
      type="button"
      className="flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 text-base font-normal capitalize"
      style={{ backgroundColor: color }}
    >
      <img src={imgUrl} alt={`${name} type`} />
      {name}
    </button>
  );
};

export default PokemonType;
