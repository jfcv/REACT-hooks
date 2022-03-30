import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import { useForm } from "./useForm";
import { Hello } from "./hello";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";
import { World } from "./world";

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

  const [domRect, elementRef] = useMeasure([data]);

  const [counter, setCounter] = useState(0);
  /**
   * useCallback shines when we want to prevent functions
   * from changing all the time and normally you would want
   * that to happen whenever you use React.memo
   */
  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  return (
    <div>
      <div>
        <World increment={increment} />
        <div>useCallback counter: {counter}</div>
      </div>

      <div style={{ display: "flex" }}>
        <div ref={elementRef}>{loading ? "loading ...!" : data}</div>
      </div>

      <div>Counter: {count}</div>

      <button onClick={() => setCount((count) => count + 1)}>Increment</button>

      <button onClick={() => setHello(!hello)}>Toggle</button>

      {hello && <Hello />}

      <pre>{JSON.stringify(domRect, null, 2)}</pre>

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
