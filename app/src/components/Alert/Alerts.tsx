import { useEffect, useState } from "react";
import { SlotType } from "../../models/Slot";
import styles from "./Alert.module.scss";

export const Alerts = ({ children }: SlotType) => {
  // console.log("Alerts");
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setHeight(document.body.offsetHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.alerts}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
