import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState();
  const controller = new AbortController;
  const signal = controller.signal;
  const fetcher = async () => {
    await fetch(url, { signal })
      .then(response => response.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    fetcher()
  }, [])


  return { data }
}

export default useFetch