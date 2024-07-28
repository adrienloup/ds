import { useData } from "../../hooks/useData";
import { PageType } from "../../models/Page";
import { CardList } from "./CardList";

export const CardGettingStarted = () => {
  console.log("CardGettingStarted");
  const { pagesData } = useData();

  const list = pagesData.filter(
    (page: PageType) => page.category!.value === "getting-started"
  );

  return <CardList list={list} />;
};
