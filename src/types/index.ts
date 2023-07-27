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
  isOpen: boolean;
  toggler: () => void;
}

export interface IPokemonList {
  handleOpenPokemonInfo: () => void;
  pokemons: IPokemonObj;
}

export interface IPokemons {
  name: string;
  types: string[];
}

export interface IPokemonCard {
  id: string;
  name: string;
  types: string[];
}

export interface IPokemonObj {
  [key: string]: IPokemons;
}

export interface IPokemonResponse {
  name: string;
  url: string;
}

export interface ITypes {
  normal: string;
  fighting: string;
  flying: string;
  poison: string;
  ground: string;
  rock: string;
  bug: string;
  ghost: string;
  steel: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  psychic: string;
  ice: string;
  dragon: string;
  dark: string;
  fairy: string;
  shadow: string;
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

export type Pokemon = {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  stats: [{ base_stat: number; stat: { name: string } }];
};
