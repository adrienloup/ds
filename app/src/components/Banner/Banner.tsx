import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Banner.module.scss";

export const Banner = ({ onClick }: { onClick: () => void }) => {
  console.log("Banner");

  return (
    <div className={style.banner}>
      <Icon name="warning" cssClass={style.icon} />
      <p>website is under construction come back soon :)</p>
      <Button
        cssClass={[style.button, ` ${style.close}`].join("")}
        onClick={onClick}
      >
        <Icon name="close" />
      </Button>
    </div>
  );
};
