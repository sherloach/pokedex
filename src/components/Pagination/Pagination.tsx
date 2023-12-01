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
    console.log('page', value);
    setPage(value);
  };

  const { items } = usePagination({
    count: 10,
    siblingCount: 0,
    page: pageProp,
    onChange: handleChange,
  });

  console.log(items);
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
              // <C.Button {...item} selected={selected}>
              //   {page}
              // </C.Button>
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
              // <C.Button {...item} navigation>
              //   {type === 'previous' ? <LeftArrowIcon /> : <RightArrowIcon />}
              // </C.Button>
            );
          }

          // eslint-disable-next-line react/no-array-index-key
          return <li key={index}>{children}</li>;
        })}
      </ul>
      {/* <li className="mr-4">
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
            className="flex h-10 w-10 items-center justify-center rounded-lg border-[0.13rem] border-solid  bg-none text-base font-bold"
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
        </li> */}
    </div>
  );
};

export default Pagination;
