import { Button } from "../Button/Button";
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
          <span>Previous page</span>
          {prev}
        </Button>
      )}
      {next && (
        <Button
          cssClass={[`${style.button}`, ` ${style.next}`].join("")}
          to={`/ds/${next}`}
        >
          <span>Next page</span>
          {next}
        </Button>
      )}
    </nav>
  );
};
