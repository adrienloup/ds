import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { AuthContext } from "../../contexts/Auth";
import { ScrollTo } from "../ScrollTo/ScrollTo";
import { AuthType } from "../../models/Auth";
import { Button } from "../Button/Button";
import { Login } from "../Login/Login";
import style from "./Footer.module.scss";

export const Footer = () => {
  console.log("Footer");

  const { dataAuth } = useContext<AuthType>(AuthContext);
  const [login, setLogin] = useState(false);

  return (
    <footer role="contentinfo" className={style.footer}>
      <div className={style.inner}>
        <ScrollTo top={0} />
        {dataAuth.user ? (
          <Button
            ariaLabel={"Logout"}
            cssClass={style.button}
            to={"/ds/login/"}
          >
            Logout
          </Button>
        ) : (
          <Button
            ariaLabel={"Login"}
            cssClass={style.button}
            onClick={() => setLogin(!login)}
          >
            Login
          </Button>
        )}
        <span>Logic of Atomic Design</span>
      </div>
      {login &&
        createPortal(
          <Login open={login} handleClick={() => setLogin(false)} />,
          document.body
        )}
    </footer>
  );
};
