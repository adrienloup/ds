import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Banner.module.scss";

export const Banner = () => {
  // console.log("Banner");

  const [hidden, setHidden] = useLocalStorage("ds_y0y09_10_banner", false);

  return (
    <>
      {!hidden && (
        <div className={style.banner}>
          <Icon name="warning" cssClass={style.icon} />
          <p>website is under construction come back soon :)</p>
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
