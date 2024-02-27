import { useState, useEffect } from 'react';

export const useFetchAndMemoizeData = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 120000);
    return () => clearInterval(intervalId);
  }, [url]);
  console.log(data)
  return data;
};

