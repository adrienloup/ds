import { PageType } from "../../models/Page";
import { Page } from "./Page";
import style from "./PageList.module.scss";

interface PageListType {
  cssClass?: string;
  list: PageType[];
}

export const PageList = ({ cssClass, list }: PageListType) => {
  const listed = [];
  let lastCategory = "";

  for (const page of list) {
    if (page.category !== lastCategory) {
      listed.push(<Page key={page.category} name={page.category!} />);
    }
    lastCategory = page.category!;
    listed.push(<Page key={page.name} name={page.name} path={page.path} />);
  }

  return (
    <div className={[style.pagelist, cssClass ? ` ${cssClass}` : ""].join("")}>
      {listed}
    </div>
  );
};
