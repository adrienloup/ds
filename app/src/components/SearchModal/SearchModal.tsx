import { useState } from "react";
import { useData } from "../../hooks/useData";
import { PageType } from "../../models/Page";
import { SearchBar } from "../SearchBar/SearchBar";
import { PageList } from "../PageList/PageList";
import styles from "./SearchModal.module.scss";

export const SearchModal = () => {
  // console.log("SearchModal");
  const { pagesData } = useData();
  const [value, setValue] = useState("");

  const list = pagesData.filter((page: PageType) => page.name.includes(value));

  return (
    <>
      <SearchBar
        cssClass={["", styles.textfield]}
        placeholder="What are you looking for?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <PageList list={list} />
    </>
  );
};
