import { CardsType } from "../../models/Cards";
import { Card } from "./Card";
import style from "./Cards.module.scss";

export const CardsComponent = ({ list }: CardsType) => {
  return (
    <div className={style.cards}>
      {list.length > 0 ? (
        list.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            path={item.path}
            novelty={item.novelty}
          />
        ))
      ) : (
        <p className={style.empty}>
          Nothing matches your search but don't give up :)
        </p>
      )}
    </div>
  );
};
