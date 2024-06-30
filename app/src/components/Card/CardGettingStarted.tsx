import { PageType } from "../../models/Page";
import { CardList } from "./CardList";
import pages from "../../data/pages.json";

export const CardGettingStarted = () => {
  // console.log("CardGettingStarted");

  const list = pages.filter(
    (page: PageType) => page.category === "getting started"
  );

  return <CardList list={list} />;
};
