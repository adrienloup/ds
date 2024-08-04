import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { RefType } from "../../models/Ref";
import { TextField } from "../Forms/TextField/TextField";
import { Button } from "../Button/Button";
import styles from "./Login.module.scss";

export const LoginForm = ({
  targetRef,
  open,
  onClick,
}: {
  targetRef?: RefType<HTMLDivElement>;
  open: boolean;
  onClick: () => void;
}) => {
  // console.log('LoginForm');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const focusableElements = useRef<HTMLElement[]>([]);

  const handleUpdate = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    const id = new Date().getTime();

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
      login({ id: id, name: user.name });
      navigate("/ds/login/");
      onClick();
      targetRef?.current?.focus();
    }
  };

  const formKeyDown = useCallback(
    (e: {
      keyCode: number;
      shiftKey: boolean;
      target: EventTarget;
      preventDefault: () => void;
    }) => {
      const list = focusableElements.current;

      if (e.keyCode === 9) {
        if (e.shiftKey) {
          if (e.target === list[0]) {
            e.preventDefault();
            list[list.length - 1].focus();
          }
        } else {
          if (e.target === list[list.length - 1]) {
            e.preventDefault();
            list[0].focus();
          }
        }
      }

      if (e.keyCode === 27) {
        onClick();
        targetRef?.current?.focus();
      }
    },
    []
  );

  const buttonKeyDown = useCallback(
    (e: { keyCode: number; preventDefault: () => void }) => {
      if (!buttonRef.current) return;
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        onClick();
        targetRef?.current?.focus();
      }
    },
    []
  );

  useEffect(() => {
    if (open && formRef.current) {
      focusableElements.current = Array.from(
        formRef.current.querySelectorAll("button, input")
      );
      if (focusableElements.current.length > 0) {
        setTimeout(() => focusableElements.current[0].focus());
      }
    }
  }, [open]);

  return (
    <form
      ref={formRef}
      id=""
      action=""
      name=""
      className={styles.form}
      onKeyDown={(e) => formKeyDown(e)}
    >
      <Button
        innerRef={buttonRef}
        cssClass={styles.close}
        onClick={() => onClick()}
        onKeyDown={(e) => buttonKeyDown(e)}
      >
        esc
      </Button>
      <div>
        <TextField
          placeholder="Name"
          onChange={(e) => handleUpdate("name", e.target.value)}
          errorMessage={errorName}
        />
      </div>
      <div>
        <TextField
          placeholder="Password"
          onChange={(e) => handleUpdate("password", e.target.value)}
          errorMessage={errorPassword}
        />
      </div>
      <div>
        <Button onClick={() => handleSubmit()} cssClass={styles.button}>
          Connection
        </Button>
      </div>
    </form>
  );
};
