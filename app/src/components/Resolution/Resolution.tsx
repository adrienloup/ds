import { useEffect, useState } from "react";
import style from "./Resolution.module.scss";

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
      {show && (
        <div className={style.resolution}>
          <p className={style.text}>Your screen size is too small :(</p>
        </div>
      )}
    </>
  );
};
