import {
  Attributes,
  Children,
  cloneElement,
  CSSProperties,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { getPosition } from "../../utils/getPosition";
import { SlotType } from "../../models/Slot";
import style from "./Sticky.module.scss";

export const Sticky = ({ children }: SlotType) => {
  console.log("Sticky");
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [height, setHeight] = useState(0);
  const sticky = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!inner.current && !sticky.current) return;

      const scrollTop = document.documentElement.scrollTop;
      const offsetTop = getPosition(sticky.current!, document);
      const offsetHeight = sticky.current!.clientHeight;

      if (scrollTop >= offsetTop.top + offsetHeight) {
        if (!active) {
          setHeight(inner.current!.clientHeight);
          setActive(true);
        }
      } else {
        if (active) setActive(false);
      }

      if (scrollTop >= document.body.clientHeight - window.innerHeight - 60) {
        if (!hidden) setHidden(true);
      } else {
        if (hidden) setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { active } as Attributes);
    }
    return child;
  });

  return (
    <div
      ref={sticky}
      className={[
        style.sticky,
        active ? ` ${style.active}` : "",
        hidden ? ` ${style.hidden}` : "",
      ].join("")}
      style={{ "--height": `${height}px` } as CSSProperties}
    >
      <div ref={inner} className={style.inner}>
        {childrenWithProps}
      </div>
    </div>
  );
};
