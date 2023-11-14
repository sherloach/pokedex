interface ISelectedPokemon {
  isOpen: boolean;
  toggler: () => void;
}

const SelectedPokemon: React.FC<ISelectedPokemon> = ({ isOpen, toggler }) => {
  return <>Selected Pokemon</>;
};

export default SelectedPokemon;
