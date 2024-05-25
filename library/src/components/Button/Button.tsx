import { useState } from "react";
import style from "./Button.module.scss";

export const DsButton = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className={style["ds-button"]}
    >
      count is {count}
    </button>
  );
};
