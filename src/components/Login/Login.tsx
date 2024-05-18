import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { LoginFormComponent } from "./LoginForm";
import style from "./Login.module.scss";

export type LoginType = {
  open: boolean;
  handleClick: () => void;
};

export const LoginComponent = ({ open, handleClick }: LoginType) => {
  const [height, setHeight] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const { login } = useAuth();

  const handleAdd = ({
    id,
    name,
    password,
  }: {
    id: string;
    name: string;
    password: string;
  }) => {
    const user = { id, name, password };

    if (user.name === "adrien" && user.password === "1234") {
      login({
        id: user.id,
        name: "adrien",
      });
      handleClick();
    } else {
      setError("errorMessage");
    }
  };

  const handleResize = () => setHeight(document.body.offsetHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => handleResize());

  return (
    <div
      role="presentation"
      className={[style.login, open ? ` ${style.open}` : ""].join("")}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={style.content}>
        <LoginFormComponent handleAdd={handleAdd} errorMessage={error} />
      </div>
      <div className={style.layer}></div>
      <div className={style.backdrop} onClick={handleClick}></div>
    </div>
  );
};
