import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      return await response.text();
    }
    fetchData().then((data) => {
      setState({ data: data, loading: false });
    });
  }, [url]);

  return state;
};
