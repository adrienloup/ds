import { useState } from "react";
import { PageType } from "../../models/Page";
import { SearchBar } from "../SearchBar/SearchBar";
import { PageList } from "../PageList/PageList";
import style from "./SearchAndFind.module.scss";

interface SearchAndFindType {
  cssClass?: string;
  list: PageType[];
}

export const SearchAndFind = ({ cssClass, list }: SearchAndFindType) => {
  console.log("SearchAndFind");

  const [value, setValue] = useState("");
  const [isNew, setNew] = useState(false);

  const listed = list.filter((page) => {
    if (value && !page.name.includes(value)) return false;
    if (isNew && !page.new) return false;
    return true;
  });

  return (
    <div
      className={[style.searchandfind, cssClass ? ` ${cssClass}` : ""].join("")}
    >
      <SearchBar
        value={value}
        checked={isNew}
        onChange={setValue}
        onCheck={setNew}
      />
      <PageList list={listed} />
    </div>
  );
};
