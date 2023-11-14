/* eslint-disable import/prefer-default-export */
export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;

  if (id >= 10 && id < 99) return `#0${id}`;

  return `#${id}`;
};
