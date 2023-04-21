import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);


  const fetcher = useCallback(async () => {
    await fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
  }, [url]);

  useEffect(() => {
    fetcher();

  }, [fetcher])



  return [data, loading];
}

export default useFetch