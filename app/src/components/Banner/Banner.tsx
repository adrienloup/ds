import { useBannerDispatch } from "../../hooks/useBanner";
import { StatusType } from "../../models/Status";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Banner.module.scss";

type BannerType = {
  id: number;
  text: string;
  status?: StatusType;
};

export const Banner = ({
  id,
  text = "No text",
  status = "info",
}: BannerType) => {
  const removeBanner = useBannerDispatch();

  return (
    <div className={[style.banner, ` ${style[status]}`].join("")}>
      <Icon name={status} cssClass={style.icon} />
      <p>{text}</p>
      <Button cssClass={style.close} onClick={() => removeBanner(id)}>
        <Icon name="close" />
      </Button>
    </div>
  );
};