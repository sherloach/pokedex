import { ReactNode, SyntheticEvent, useState } from 'react';

import { ReactComponent as LeftArrowIcon } from '@/assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '@/assets/icon-arrow-right.svg';
import { useMedia } from '@/hooks';

interface ISlide {
  children: ReactNode;
}

const GAP_EACH_NAVIGATION = 12.5;
const LENGTH_OF_SLIDE = 87.5;

const Slide = ({ children }: ISlide) => {
  // 48rem = 768px
  const mobile = useMedia('(min-width: 48rem)');
  const [slidePosition, setSlidePosition] = useState(0);

  const slideNavigation = ({ currentTarget }: SyntheticEvent) => {
    const direction = (currentTarget as HTMLButtonElement).value;

    if (direction === 'next') {
      setSlidePosition(
        slidePosition <= -LENGTH_OF_SLIDE
          ? -LENGTH_OF_SLIDE
          : slidePosition - GAP_EACH_NAVIGATION
      );
    } else {
      setSlidePosition(
        slidePosition === 0 ? 0 : slidePosition + GAP_EACH_NAVIGATION
      );
    }
  };

  return (
    <div className="sm:flex sm:items-center sm:gap-4">
      {mobile && (
        <button
          type="button"
          value="prev"
          onClick={slideNavigation}
          disabled={slidePosition === 0}
          className="disabled:cursor-default disabled:opacity-50"
        >
          <LeftArrowIcon />
        </button>
      )}
      <div className="max-w-full overflow-x-scroll md:max-w-xs md:overflow-hidden lg:max-w-sm lg:transition-all">
        <div
          className="flex gap-2 md:transition-all md:duration-200"
          style={{ transform: `translateX(${slidePosition}rem)` }}
        >
          {children}
        </div>
      </div>
      {mobile && (
        <button
          type="button"
          value="next"
          onClick={slideNavigation}
          disabled={slidePosition === -87.5}
          className="disabled:cursor-default disabled:opacity-50"
        >
          <RightArrowIcon />
        </button>
      )}
    </div>
  );
};

export default Slide;
