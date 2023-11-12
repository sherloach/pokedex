import { ReactComponent as LeftArrowIcon } from '@/assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '@/assets/icon-arrow-right.svg';

const Pagination = () => {
  return (
    <div className="mt-10">
      <ul className="flex items-center justify-center gap-2">
        <li className="mr-4">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center bg-none"
          >
            <LeftArrowIcon />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-[0.13rem] border-solid bg-none text-base font-bold"
          >
            1
          </button>
        </li>
        <li>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-[0.13rem] border-solid bg-[#2f5aff] bg-none text-base font-bold"
          >
            2
          </button>
        </li>
        <li>
          <span className="block py-3 text-base font-bold">...</span>
        </li>
        <li>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border-[0.13rem] border-solid bg-none text-base font-bold"
          >
            3
          </button>
        </li>
        <li className="ml-4">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center bg-none"
          >
            <RightArrowIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
