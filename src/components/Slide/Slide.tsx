import { ReactNode } from 'react';

import { ReactComponent as LeftArrowIcon } from '@/assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '@/assets/icon-arrow-right.svg';
import { useMedia } from '@/hooks';

interface ISlide {
  children: ReactNode;
}

const Slide = ({ children }: ISlide) => {
  // 31.25rem = 500px
  const mobile = useMedia('(min-width: 48rem)');

  return (
    <div className="sm:flex sm:items-center sm:gap-4">
      {mobile && (
        <button type="button">
          <LeftArrowIcon />
        </button>
      )}
      <div className="max-w-full overflow-x-scroll transition-all md:max-w-xs md:overflow-hidden lg:max-w-sm">
        {children}
      </div>
      {mobile && (
        <button type="button">
          <RightArrowIcon />
        </button>
      )}
    </div>
  );
};

export default Slide;
