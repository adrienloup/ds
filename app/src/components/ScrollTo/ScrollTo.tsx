import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import style from "./ScrollTo.module.scss";

export const ScrollTo = ({ top }: { top: number }) => {
  const [active, setActive] = useState(false);

  const onScroll = () => {
    setActive(window.scrollY >= window.innerHeight * 4);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => onScroll());

  return (
    <button
      className={[style.scrollto, active ? ` ${style.active}` : ""].join("")}
      onClick={() => {
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }}
    >
      <Icon name="publish" />
    </button>
  );
};
