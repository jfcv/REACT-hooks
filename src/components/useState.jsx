import React, { Component, useState } from "react";

const expensiveInitialState = () => {
  /**
   * a lot of computations
   * for loops, etc ..
   */
  return 10;
};

const UseState = () => {
  /**
   * using useState when having an expensive initial state
   * you call it using a function
   * that way you ensure it is only called once
   */
  // const [count, setCount] = useState(() => expensiveInitialState());

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <h1>Heading 1</h1>
      <div>count 1 : {count}</div>
      <div>count 2 : {count2}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseState;
