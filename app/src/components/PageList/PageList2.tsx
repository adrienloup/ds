import { PageType } from "../../models/Page";
import { Card } from "../Card/Card";
import pages from "../../data/pages.json";
import style from "./PageList.module.scss";

export const PageList2 = () => {
  console.log("PageList2");

  const listed = pages.filter(
    (page: PageType) => page.category === "getting started"
  );

  return (
    <div className={style.list}>
      {listed.length > 0 ? (
        listed.map((item: PageType, index) => (
          <Card
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
