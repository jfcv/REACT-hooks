import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./hello";

const UseState = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [hello, setHello] = useState(true);

  return (
    <div>
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
