import React, { useState, useMemo } from "react";
import { useFetch } from "./useFetch";

/**
 * API call + computing data
 */
const computeLongestWord = (data) => {
  if (!data) {
    return [];
  }

  console.log("computing longest word");

  let longestWord = "";

  JSON.parse(data).forEach((sentence) =>
    sentence.split(" ").forEach((word) => {
      if (longestWord.length < word.length) longestWord = word;
    })
  );

  return longestWord;
};

const UseMemo = () => {
  /**
   * useState hook
   */
  const [count, setCount] = useState(0);

  /**
   * useFetch custom hook
   */
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  /**
   * useMemo hook
   */
  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default UseMemo;
