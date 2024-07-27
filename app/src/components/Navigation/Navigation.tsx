import { Button } from "../Button/Button";
import i18n from "../../i18n";
import style from "./Navigation.module.scss";

type NavigationType = {
  prev?: string;
  next?: string;
};

export const Navigation = ({ prev, next }: NavigationType) => {
  return (
    <nav className={style.navigation}>
      {prev && (
        <Button
          cssClass={[`${style.button}`, ` ${style.prev}`].join("")}
          to={`/ds/${prev}`}
        >
          <span>{i18n.t("component.navigation.previous")}</span>
          {prev}
        </Button>
      )}
      {next && (
        <Button
          cssClass={[`${style.button}`, ` ${style.next}`].join("")}
          to={`/ds/${next}`}
        >
          <span>{i18n.t("component.navigation.next")}</span>
          {next}
        </Button>
      )}
    </nav>
  );
};
