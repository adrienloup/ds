import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import styles from "./Login.module.scss";

interface LoginProps {
  open: boolean;
  handleClick: () => void;
}

export const Login = ({ open, handleClick }: LoginProps) => {
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
          <LoginForm onClick={handleClick} />
        </div>
        <div className={styles.layer}></div>
      </div>
      <div className={styles.backdrop} onClick={handleClick}></div>
    </div>
  );
};
