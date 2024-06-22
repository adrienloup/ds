import TestHigherOrderComponentWithCounter from "./TestHigherOrderComponentWithCounter";

const TestHigherOrderComponentCounterA = ({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) => {
  console.log("TestHigherOrderComponentCounterA");

  return <button onClick={() => onClick()}>{count}</button>;
};

export default TestHigherOrderComponentWithCounter(
  TestHigherOrderComponentCounterA,
  0
);
