import { useState } from "react";
import { PageType } from "../../models/Page";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardList } from "./CardList";
import pages from "../../data/pages.json";

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
      <SearchBar
        value={value}
        checked={isNews}
        onChange={(e) => setValue(e.target.value)}
        onCheck={(e) => setNews(e.target.checked)}
        label={`${list.length} React component${list.length > 1 ? "s" : ""}`}
      />
      <CardList list={list} />
    </>
  );
};
