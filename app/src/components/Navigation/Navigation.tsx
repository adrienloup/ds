import { Button } from "../Button/Button";
import i18n from "../../i18n";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  prev?: string;
  next?: string;
}

export const Navigation = ({ prev, next }: NavigationProps) => {
  return (
    <nav className={styles.navigation}>
      {prev && (
        <Button
          cssClass={[`${styles.button}`, ` ${styles.prev}`].join("")}
          to={`/ds/${prev}`}
        >
          <span>{i18n.t("component.navigation.previous")}</span>
          {prev}
        </Button>
      )}
      {next && (
        <Button
          cssClass={[`${styles.button}`, ` ${styles.next}`].join("")}
          to={`/ds/${next}`}
        >
          <span>{i18n.t("component.navigation.next")}</span>
          {next}
        </Button>
      )}
    </nav>
  );
};
