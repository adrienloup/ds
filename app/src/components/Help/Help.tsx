import { CSSProperties, useEffect, useRef, useState } from "react";
import { getPosition } from "../../utils/getPosition";
import style from "./Help.module.scss";

export const Help = () => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  const help = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!inner.current && !help.current) return;

      const scrollTop = document.documentElement.scrollTop;
      const offsetTop = getPosition(help.current!);

      if (scrollTop >= offsetTop.top) {
        if (!active) {
          setHeight(inner.current!.clientHeight);
          setActive(true);
        }
      } else {
        if (active) setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      ref={help}
      className={[style.help, active ? ` ${style.active}` : ""].join("")}
      style={{ "--height": `${height}px` } as CSSProperties}
    >
      <div ref={inner} className={style.inner}>
        <span>
          <span>Help us keep running</span>
        </span>{" "}
        Thank you
      </div>
    </div>
  );
};
