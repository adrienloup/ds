import { useState } from "react";
import { PageType } from "../../models/Page";
import { SearchBar } from "../SearchBar/SearchBar";
import { Checkbox } from "../Forms/Checkbox/Checkbox";
import { CardList } from "./CardList";
import pages from "../../assets/pages.json";
import style from "./Card.module.scss";

export const CardSearchable = () => {
  // console.log("CardSearchable");
  const [value, setValue] = useState("");
  const [isNews, setNews] = useState(false);

  const list = pages.filter((page: PageType) => {
    if (page.category === "getting started") return false;
    if (value && !page.name.includes(value)) return false;
    if (isNews && !page.news) return false;
    return true;
  });

  return (
    <>
      <label htmlFor="c-id" className={style.label}>
        {list.length} React component{list.length > 1 ? "s" : ""}
      </label>
      <SearchBar
        cssClass={[style.searchbar]}
        placeholder="UI components"
        id="c-id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        status={list.length === 0 ? "error" : undefined}
      />
      <Checkbox
        cssClass={style.checkbox}
        checked={isNews}
        onChange={(e) => setNews(e.target.checked)}
        label="Only show new components"
      />
      <CardList list={list} />
    </>
  );
};
