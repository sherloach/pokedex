import { ReactComponent as HomeIcon } from '@/assets/icon-home.svg';

const HomeButton = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-[0.5rem] rounded-lg border border-solid border-[#24293f] bg-gradient-to-b from-[#151a37] to-[#151a3700] p-3 font-bold leading-[150%] text-white"
    >
      <HomeIcon />
      Home
    </button>
  );
};

export default HomeButton;
