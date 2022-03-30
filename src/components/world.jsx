import React, { useRef } from "react";

/**
 * React.memo for memoizing components
 */
export const World = React.memo(({ increment }) => {
  /**
   * useCountRenders hook
   * could be!
   */
  const renders = useRef(0);
  console.log("renders: ", renders.current++);

  return <button onClick={increment}>useCallback Hook!</button>;
});
