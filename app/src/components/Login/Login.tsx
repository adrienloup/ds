import { useEffect, useState } from "react";
import { RefType } from "../../models/Ref";
import { LoginForm } from "./LoginForm";
import styles from "./Login.module.scss";

interface LoginProps {
  targetRef?: RefType<HTMLDivElement>;
  open: boolean;
  onClick: () => void;
}

export const Login = ({ targetRef, open, onClick }: LoginProps) => {
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
      className={[styles.login, open ? ` ${styles.open}` : ""].join("")}
      style={{
        height: `${height}px`,
      }}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <LoginForm targetRef={targetRef} open={open} onClick={onClick} />
        </div>
        <div className={styles.layer}></div>
      </div>
      <div className={styles.backdrop} onClick={onClick}></div>
    </div>
  );
};
