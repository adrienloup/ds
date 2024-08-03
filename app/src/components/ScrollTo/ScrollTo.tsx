import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./ScrollTo.module.scss";

export const ScrollTo = ({ top }: { top: number }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setActive(document.body.clientHeight > window.innerHeight * 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      className={[styles.scrollto, active ? ` ${styles.active}` : ""].join("")}
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
