import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Banner.module.scss";

export const Banner = () => {
  // console.log("Banner");
  const [hidden, setHidden] = useState(false);

  return (
    <>
      {!hidden && (
        <div className={style.banner}>
          <Icon name="warning" cssClass={style.icon} />
          <p>
            The website is under construction, please be kind as some parts are
            missing, check back soon :)
          </p>
          <Button
            cssClass={[style.button, ` ${style.close}`].join("")}
            onClick={() => setHidden(true)}
          >
            <Icon name="close" />
          </Button>
        </div>
      )}
    </>
  );
};
