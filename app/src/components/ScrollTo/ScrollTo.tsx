import { useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./ScrollTo.module.scss";
import { Tooltip } from "../Tooltip/Tooltip";

export const ScrollTo = ({ top }: { top: number }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setActive(document.body.clientHeight > window.innerHeight * 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Tooltip
      text="Top of the page"
      position="top-start"
      onKeyDown={() => handleClick()}
    >
      <button
        tabIndex={-1}
        className={[styles.scrollto, active ? ` ${styles.active}` : ""].join(
          ""
        )}
        onClick={() => handleClick()}
      >
        <Icon name="publish" />
      </button>
    </Tooltip>
  );
};
