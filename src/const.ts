export interface IStats {
  HP: string;
  ATK: string;
  DEF: string;
  SpA: string;
  SpD: string;
  SPD: string;
  TOT: string;
}

export interface ISelectedPokemon {
  hidden: boolean;
  handleClosePokemonInfo: () => void;
}

export interface IPokemonList {
  handleOpenPokemonInfo: () => void;
}

export const stats: IStats = {
  HP: '#DF2140',
  ATK: '#FF994D',
  DEF: '#EECF3F',
  SpA: '#85DDFF',
  SpD: '#96DA83',
  SPD: '#FB94A8',
  TOT: '#7195DC',
};

export const typeColors = {
  normal: '#BCBCAC',
  fighting: '#BC5442',
  flying: '#669AFF',
  poison: '#AB549A',
  ground: '#DEBC54',
  rock: '#BCAC66',
  bug: '#ABBC1C',
  ghost: '#6666BC',
  steel: '#ABACBC',
  fire: '#FF421C',
  water: '#2F9AFF',
  grass: '#78CD54',
  electric: '#FFCD30',
  psychic: '#FF549A',
  ice: '#78DEFF',
  dragon: '#7866EF',
  dark: '#785442',
  fairy: '#FFACFF',
  shadow: '#0E2E4C',
};
