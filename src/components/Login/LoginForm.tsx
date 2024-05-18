import { useState } from "react";
import style from "./Login.module.scss";
import { TextFieldComponent } from "../TextField/TextField";
import { ButtonComponent } from "../Button/Button";

type FormProps = {
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
};

export const LoginFormComponent = ({ errorMessage, handleAdd }: FormProps) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    const id = new Date().getTime().toString();
    handleAdd({ id, name, password });
  };

  return (
    <form action="submit" className={style.form}>
      <div className={style.title}>Login</div>
      <div>
        <TextFieldComponent
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          cssClass={style.input}
          errorMessage={errorMessage}
        />
      </div>
      <div>
        <TextFieldComponent
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          cssClass={style.input}
          errorMessage={errorMessage}
        />
      </div>
      <div>
        <ButtonComponent onClick={() => handleSubmit()} cssClass={style.button}>
          Ok
        </ButtonComponent>
      </div>
    </form>
  );
};
