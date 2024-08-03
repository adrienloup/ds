import { CardType } from "../../models/Card";
import { CardItem } from "./CardItem";
import { Empty } from "../Empty/Empty";
import styles from "./Card.module.scss";

interface CardListProps {
  list: CardType[];
}

export const CardList = ({ list }: CardListProps) => {
  // console.log("CardList");
  return (
    <div className={styles.cardlist}>
      {list.length > 0 ? (
        list.map((item: CardType, index) => (
          <CardItem
            key={index}
            name={item.name}
            description={item.description}
            path={item.path}
            news={item.news}
            soon={item.soon}
          />
        ))
      ) : (
        <Empty
          text="Nothing matches your search but don't give up :)"
          cssClass={styles.empty}
        />
      )}
    </div>
  );
};
