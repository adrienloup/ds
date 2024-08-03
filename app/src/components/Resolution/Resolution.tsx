import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Resolution.module.scss";

export const Resolution = () => {
  const [show, setShow] = useState(false);

  const handelResize = () => {
    setShow(window.innerWidth < 440);
  };

  useEffect(() => {
    window.addEventListener("resize", handelResize);
    return () => window.removeEventListener("resize", handelResize);
  }, []);

  useEffect(() => handelResize());

  return (
    <>
      {show &&
        createPortal(
          <div className={styles.resolution}>
            <p className={styles.text}>Your screen size is too small</p>
          </div>,
          document.body
        )}
    </>
  );
};
