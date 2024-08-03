import { useEffect, useState } from "react";
import { PositionType } from "../../models/Position";
import { Icon } from "../Icon/Icon";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "./ScrollTo.module.scss";

export const ScrollTo = ({
  top,
  text,
  position,
}: {
  top: number;
  text: string;
  position: PositionType;
}) => {
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
    <Tooltip text={text} position={position} onKeyDown={() => handleClick()}>
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
