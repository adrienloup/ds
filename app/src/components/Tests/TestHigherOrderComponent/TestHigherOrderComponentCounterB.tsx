import TestHigherOrderComponentWithCounter from "./TestHigherOrderComponentWithCounter";

const TestHigherOrderComponentCounterB = ({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) => {
  console.log("TestHigherOrderComponentCounterB");

  return <button onClick={() => onClick()}>{count}</button>;
};

export default TestHigherOrderComponentWithCounter(
  TestHigherOrderComponentCounterB,
  1
);
