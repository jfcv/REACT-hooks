import React, { useLayoutEffect, useState, useRef } from "react";

export const useMeasure = (dependencies) => {
  const [domRect, setDomRect] = useState({});
  const elementRef = useRef();

  /**
   * useLayoutEffect
   * it fires synchronously after all DOM mutations
   */
  useLayoutEffect(() => {
    setDomRect(elementRef.current.getBoundingClientRect());
  }, dependencies);

  return [domRect, elementRef];
};
