import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { ScrollTo } from "../ScrollTo/ScrollTo";
import { Button } from "../Button/Button";
import { Login } from "../Login/Login";
import styles from "./Footer.module.scss";

export const Footer = () => {
  // console.log("Footer");
  const { t } = useTranslation();
  const { user } = useAuth();
  const [showModalTask, setShowModalTask] = useState(false);

  return (
    <footer role="contentinfo" data-cy="footer" className={styles.footer}>
      <div className={styles.inner}>
        <ScrollTo top={0} />
        <span className={styles.text}>{t("component.footer")}</span>
        {user.name ? (
          <Button cssClass={styles.button} to={"/ds/login/"}>
            Login page
          </Button>
        ) : (
          <Button
            cssClass={styles.button}
            onClick={() => setShowModalTask(!showModalTask)}
          >
            Login
          </Button>
        )}
      </div>
      {showModalTask &&
        createPortal(
          <Login
            open={showModalTask}
            handleClick={() => setShowModalTask(false)}
          />,
          document.body
        )}
    </footer>
  );
};
