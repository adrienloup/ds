import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { LoginForm } from "./LoginForm";
import style from "./Login.module.scss";

interface LoginType {
  open: boolean;
  handleClick: () => void;
}

export const Login = ({ open, handleClick }: LoginType) => {
  const [height, setHeight] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useUser();

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

    if (user.name === "adrien" && user.password === "loup") {
      login({
        id: user.id,
        name: user.name,
      });
      handleClick();
      navigate("/ds/login/");
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
        <LoginForm handleAdd={handleAdd} errorMessage={error} />
      </div>
      <div className={style.layer}></div>
      <div className={style.backdrop} onClick={handleClick}></div>
    </div>
  );
};
