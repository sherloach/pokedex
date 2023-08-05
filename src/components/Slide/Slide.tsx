import { ReactNode } from 'react';

interface ISlide {
  children: ReactNode;
}

const Slide = ({ children }: ISlide) => {
  return (
    <div className="md:flex md:items-center md:gap-4">
      <div className="max-w-full overflow-x-scroll">{children}</div>
    </div>
  );
};

export default Slide;
