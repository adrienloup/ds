import { useState } from "react";
import style from "./Button.module.scss";

export const Button = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className={style.button}
    >
      count is {count}
    </button>
  );
};
