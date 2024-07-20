import { setStatusIcon } from "../../utils/statusIcon";
import { useBannerDispatch } from "../../hooks/useBanner";
import { StatusType } from "../../models/Status";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Banner.module.scss";

interface BannerType {
  id: string;
  text: string;
  status?: StatusType;
}

export const Banner = ({
  id,
  text = "No text",
  status = "info",
}: BannerType) => {
  const removeBanner = useBannerDispatch();

  return (
    <div
      data-cy={`banner-${id}`}
      className={[style.banner, ` ${style[status]}`].join("")}
    >
      <Icon name={setStatusIcon(status)} cssClass={style.icon} />
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <Button cssClass={style.close} onClick={() => removeBanner(id)}>
        <Icon name="close" />
      </Button>
    </div>
  );
};
