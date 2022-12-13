import { useEffect, useState } from 'react';

const useGet = (url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await (await fetch(url)).json();
      setData(response);
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useGet;
