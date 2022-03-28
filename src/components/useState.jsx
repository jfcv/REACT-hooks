import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./hello";
import { useFetch } from "./useFetch";

const UseState = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [hello, setHello] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

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

  return (
    <div>
      <div>{loading ? "loading ...!" : data}</div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>

      <button onClick={() => setHello(!hello)}>Toggle</button>

      {hello && <Hello />}

      <input
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
    </div>
  );
};

export default UseState;
