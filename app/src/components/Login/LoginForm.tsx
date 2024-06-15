import { useState } from "react";
import { TextField } from "../Forms/TextField/TextField";
import { Button } from "../Button/Button";
import style from "./Login.module.scss";

interface LoginFormType {
  errorMessage?: string;
  handleAdd: ({
    id,
    name,
    password,
  }: {
    id: string;
    name: string;
    password: string;
  }) => void;
}

export const LoginForm = ({ errorMessage, handleAdd }: LoginFormType) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const id = new Date().getTime().toString();
    handleAdd({ id, name, password });
  };

  return (
    <form action="submit" className={style.form}>
      <div>
        <TextField
          placeholder="Name"
          onChange={setName}
          cssClass={style.input}
          errorMessage={errorMessage}
        />
      </div>
      <div>
        <TextField
          placeholder="Password"
          onChange={setPassword}
          cssClass={style.input}
          errorMessage={errorMessage}
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
