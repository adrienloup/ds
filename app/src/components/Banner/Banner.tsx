import { useState } from "react";
import { setStatusIcon } from "../../utils/statusIcon";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { BannerType } from "../../models/Banner";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Banner.module.scss";

export const Banner = ({
  id,
  text = "No text",
  status = "info",
}: BannerType) => {
  const [banner, setBanner] = useSessionStorage(id, "");
  const [hidden, setHidden] = useState(!!banner);

  const handleClick = () => {
    setBanner("hidden");
    setHidden(true);
  };

  return (
    <>
      {!hidden && (
        <div
          data-cy={id}
          className={[style.banner, ` ${style[status]}`].join("")}
        >
          <Icon name={setStatusIcon(status)} cssClass={style.icon} />
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
          <Button
            data-cy="banner-close"
            cssClass={style.close}
            onClick={handleClick}
          >
            <Icon name="close" />
          </Button>
        </div>
      )}
    </>
  );
};
