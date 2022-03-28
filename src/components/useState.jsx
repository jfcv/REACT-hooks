import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, { Component, useState } from "react";
import { useForm } from "./useForm";

const UseState = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default UseState;
