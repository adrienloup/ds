import { Link } from "react-router-dom";
import { PageType } from "../../models/Page";
import { Icon } from "../Icon/Icon";
import style from "./Card.module.scss";

export const Card = ({ name, description, path, news }: PageType) => {
  return (
    <div className={style.card}>
      <Link to={path!} className={style.link}>
        <div className={style.name}>
          {name}
          {news && <span>new</span>}
        </div>
        <p className={style.description}>{description}</p>
        <Icon name="trending_flat" cssClass={style.icon} />
      </Link>
    </div>
  );
};
