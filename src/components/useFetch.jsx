import React, { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      /**
       * called when the component gets unmount!
       * clean-up method !
       */
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      return await response.text();
    }
    fetchData().then((data) => {
      if (isCurrent.current) setState({ data: data, loading: false });
    });
  }, [url, setState]);

  return state;
};
