import { useState } from "react";

const TestHigherOrderComponentWithCounter = (
  Component: React.ComponentType<{ count: number; onClick: () => void }>,
  defaultValue: number
) => {
  const NewComponent = ({ ...rest }) => {
    console.log("TestHigherOrderComponentWithCounter");

    const [count, setCount] = useState(defaultValue);

    return (
      <Component
        count={count}
        onClick={() => setCount((count) => count + 1)}
        {...rest}
      />
    );
  };

  return NewComponent;
};

export default TestHigherOrderComponentWithCounter;
