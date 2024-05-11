import { Link } from "react-router-dom";
import { CardType } from "../../models/Cards";
import style from "./Cards.module.scss";

export const Card = ({
  title = "No title",
  text = "No text",
  path = "/home",
  novelty = false,
}: CardType) => {
  return (
    <div className={style.card}>
      <Link to={path} className={style.link}>
        <div className={style.title}>
          {title}
          {novelty && <span>new</span>}
        </div>
        <p className={style.text}>{text}</p>
      </Link>
    </div>
  );
};
