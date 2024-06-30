import { CardType } from "../../models/Card";
import { CardItem } from "./CardItem";
import style from "./Card.module.scss";

type CardListType = {
  list: CardType[];
};

export const CardList = ({ list }: CardListType) => {
  // console.log("CardList");
  return (
    <div className={style.cardlist}>
      {list.length > 0 ? (
        list.map((item: CardType, index) => (
          <CardItem
            key={index}
            name={item.name}
            description={item.description}
            path={item.path}
            news={item.news}
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
