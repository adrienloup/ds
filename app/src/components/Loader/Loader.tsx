import { useEffect, useRef, useState } from "react";
import { Trans } from "react-i18next";
import style from "./Loader.module.scss";

export const Loader = () => {
  // console.log("Loader");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const percent = Math.round((count * 100) / 3);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (count >= 3) {
      document.documentElement.classList.add(`${style.loaded}`);
      return;
    }
    const interval = setInterval(() => setCount((count) => count + 1), 300);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div ref={ref} className={style.loader}>
      <div className={style.label}>
        <div>
          <Trans i18nKey="component.loader">
            <span>Design System using the logic of</span> Atomic Design
          </Trans>
        </div>
      </div>
      <div className={style.percent} style={{ bottom: `${percent * 0.9}%` }}>
        <div>{percent}%</div>
      </div>
    </div>
  );
};
