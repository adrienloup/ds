import { PageType } from "../../models/Page";
import { CardItem } from "../Card/CardItem";

type PageListType = {
  list: PageType[];
};

export const PageList = ({ list }: PageListType) => {
  console.log("PageList");

  const listed = [];
  let lastCategory = "";

  for (const page of list) {
    if (page.category!.value !== lastCategory) {
      listed.push(
        <CardItem key={page.category!.value} name={page.category!.name} />
      );
    }
    lastCategory = page.category!.value;
    listed.push(<CardItem key={page.name} name={page.name} path={page.path} />);
  }

  return <div>{listed}</div>;
};
