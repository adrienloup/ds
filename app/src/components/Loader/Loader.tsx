import { useCallback, useEffect, useRef, useState } from "react";
import style from "./Loader.module.scss";

export const Loader = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const percent = Math.round((count * 100) / 3);

  const counter = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    if (count >= 3) {
      document.documentElement.classList.add(`${style.loaded}`);
      return;
    }
    const interval = setInterval(counter, 300);
    return () => clearInterval(interval);
  }, [counter, count]);

  return (
    <div ref={ref} className={style.loader}>
      <div className={style.label}>
        <div>
          <span>The design system using the logic of</span> Atomic Design
        </div>
      </div>
      <div className={style.percent} style={{ bottom: `${percent * 0.9}%` }}>
        <div>{percent}%</div>
      </div>
    </div>
  );
};
