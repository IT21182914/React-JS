import React, { useMemo } from "react";

const MyComponent = ({ a, b }) => {
  const memoizedValue = useMemo(() => {
    return a + b;
  }, [a, b]);

  return <div>{memoizedValue}</div>;
};
