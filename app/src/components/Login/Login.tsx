import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import style from "./Login.module.scss";

interface LoginType {
  open: boolean;
  handleClick: () => void;
}

export const Login = ({ open, handleClick }: LoginType) => {
  const [height, setHeight] = useState(0);

  const onResize = () => setHeight(document.body.offsetHeight);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  useEffect(() => onResize());

  return (
    <div
      role="presentation"
      className={[style.login, open ? ` ${style.open}` : ""].join("")}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={style.content}>
        <LoginForm />
      </div>
      <div className={style.layer}></div>
      <div className={style.backdrop} onClick={handleClick}></div>
    </div>
  );
};
