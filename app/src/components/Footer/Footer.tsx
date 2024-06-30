import { useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../../hooks/useAuth";
import { ScrollTo } from "../ScrollTo/ScrollTo";
import { Button } from "../Button/Button";
import { Login } from "../Login/Login";
import style from "./Footer.module.scss";

export const Footer = () => {
  // console.log("Footer");
  const { user } = useAuth();
  const [showModalTask, setShowModalTask] = useState(false);

  return (
    <footer role="contentinfo" className={style.footer}>
      <div className={style.inner}>
        <ScrollTo top={0} />
        <span className={style.text}>Logic of Atomic Design</span>
        {user.name ? (
          <Button cssClass={style.button} to={"/ds/login/"}>
            Login page
          </Button>
        ) : (
          <Button
            cssClass={style.button}
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
