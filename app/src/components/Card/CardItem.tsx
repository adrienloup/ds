import { Link } from "react-router-dom";
import { PageType } from "../../models/Page";
import { Icon } from "../Icon/Icon";
import i18n from "../../i18n";
import styles from "./Card.module.scss";

export const CardItem = ({ name, description, path, news, soon }: PageType) => {
  return (
    <div className={styles.card}>
      <Link to={path!} className={styles.link}>
        <div className={styles.name}>
          {name}
          {news && <span>{i18n.t("generic.mention.new")}</span>}
          {soon && <span>{i18n.t("generic.mention.soon")}</span>}
        </div>
        <p className={styles.description}>{description}</p>
        <Icon name="read_more" cssClass={styles.icon} />
      </Link>
    </div>
  );
};
