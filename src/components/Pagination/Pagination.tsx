/* eslint-disable react/jsx-props-no-spreading */
import { ReactComponent as LeftArrowIcon } from '@/assets/icon-arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '@/assets/icon-arrow-right.svg';
import usePagination from '@/hooks/usePagination';

interface IPagination {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<IPagination> = ({ page: pageProp, setPage }) => {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { items } = usePagination({
    count: 10,
    siblingCount: 0,
    page: pageProp,
    onChange: handleChange,
  });

  return (
    <div className="mt-10">
      <ul className="flex items-center justify-center gap-2">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <span className="block py-3 text-base font-bold">...</span>
            );
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border-[0.13rem] border-solid bg-none text-base font-bold"
                style={{
                  backgroundColor: selected ? '#2f5aff' : 'transparent',
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center bg-none disabled:cursor-default disabled:opacity-50"
                {...item}
              >
                {type === 'previous' ? <LeftArrowIcon /> : <RightArrowIcon />}
              </button>
            );
          }

          // eslint-disable-next-line react/no-array-index-key
          return <li key={index}>{children}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagination;
