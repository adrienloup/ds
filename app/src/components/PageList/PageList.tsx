import { PageType } from "../../models/Page";
import { Card } from "../Card/Card";

interface PageListType {
  list: PageType[];
}

export const PageList = ({ list }: PageListType) => {
  console.log("PageList");

  const listed = [];
  let lastCategory = "";

  for (const page of list) {
    if (page.category !== lastCategory) {
      listed.push(<Card key={page.category} name={page.category!} />);
    }
    lastCategory = page.category!;
    listed.push(<Card key={page.name} name={page.name} path={page.path} />);
  }

  return <div>{listed}</div>;
};
