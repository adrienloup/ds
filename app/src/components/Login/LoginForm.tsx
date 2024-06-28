import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { TextField } from "../Forms/TextField/TextField";
import { Button } from "../Button/Button";
import style from "./Login.module.scss";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleUpdate = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    const id = new Date().getTime().toString();

    if (user.name === "") {
      setErrorName("Name is empty");
    } else if (user.name !== "adrien") {
      setErrorName("Bad name");
    } else {
      setErrorName("");
    }

    if (user.password === "") {
      setErrorPassword("Password is empty");
    } else if (user.password !== "loup") {
      setErrorPassword("Bad password");
    } else {
      setErrorPassword("");
    }

    if (user.name === "adrien" && user.password === "loup") {
      login({
        id: id,
        name: user.name,
      });
      navigate("/ds/login/");
    }
  };

  return (
    <form action="submit" className={style.form}>
      <div>
        <TextField
          placeholder="Name"
          onChange={(e) => handleUpdate("name", e.target.value)}
          cssClass={style.textfield}
          errorMessage={errorName}
        />
      </div>
      <div>
        <TextField
          placeholder="Password"
          onChange={(e) => handleUpdate("password", e.target.value)}
          cssClass={style.textfield}
          errorMessage={errorPassword}
        />
      </div>
      <div>
        <Button onClick={() => handleSubmit()} cssClass={style.button}>
          Connection
        </Button>
      </div>
    </form>
  );
};
