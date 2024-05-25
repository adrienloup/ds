import { useState } from "react";
import { PageType } from "../../models/Page";
import { SearchBar } from "../SearchBar/SearchBar";
import { Card } from "../Card/Card";
import pages from "../../data/pages.json";
import style from "./PageList.module.scss";

export const PageList1 = () => {
  console.log("PageList1");

  const [value, setValue] = useState("");
  const [isNews, setNews] = useState(false);

  const listed = pages.filter((page: PageType) => {
    if (page.category === "getting started") return false;
    if (value && !page.name.includes(value)) return false;
    if (isNews && !page.news) return false;
    return true;
  });

  return (
    <>
      <SearchBar
        value={value}
        checked={isNews}
        onChange={setValue}
        onCheck={setNews}
        label={`${listed.length} component${listed.length > 1 ? "s" : ""}`}
      />
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
    </>
  );
};
