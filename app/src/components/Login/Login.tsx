import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import style from "./Login.module.scss";

type LoginType = {
  open: boolean;
  handleClick: () => void;
};

export const Login = ({ open, handleClick }: LoginType) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => setHeight(document.body.offsetHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      role="presentation"
      className={[style.login, open ? ` ${style.open}` : ""].join("")}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={style.inner}>
        <div className={style.content}>
          <LoginForm onClick={handleClick} />
        </div>
        <div className={style.layer}></div>
      </div>
      <div className={style.backdrop} onClick={handleClick}></div>
    </div>
  );
};
