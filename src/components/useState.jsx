import React, { useEffect, useState, useRef } from "react";
import { useForm } from "./useForm";
import { Hello } from "./hello";
import { useFetch } from "./useFetch";

const UseState = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [hello, setHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };

  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  /**
   * fetching data : useEffect
   */
  const [count, setCount] = useState(0);
  const apiURL = `http://numbersapi.com/${count}`;
  const { data, loading } = useFetch(apiURL);

  /**
   * persisting data at the localstorage : useEffect
   */
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  /**
   * useRef
   * getting reference for a React Component
   * and being able to use it somewhere in the application
   * where it's needed
   */
  const inputRef = useRef();
  const helloFn = useRef(() => console.log("hello"));

  return (
    <div>
      <div>{loading ? "loading ...!" : data}</div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>

      <button onClick={() => setHello(!hello)}>Toggle</button>

      {hello && <Hello />}

      <input
        ref={inputRef}
        type="text"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <button
        onClick={() => {
          inputRef.current.focus();
          helloFn.current();
        }}
      >
        Focus
      </button>
    </div>
  );
};

export default UseState;
