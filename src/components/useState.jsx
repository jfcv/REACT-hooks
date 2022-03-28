import React, { useEffect } from "react";
import { useForm } from "./useForm";

const UseState = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  /**
   * every time the components gets re-render the
   * useEffect function gets called
   */
  useEffect(() => {
    console.log("useEffect hook!");
  }, [values.email]);

  return (
    <div>
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
