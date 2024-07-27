import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useData } from "../../hooks/useData";
import { Accordion } from "../Accordion/Accordion";
import style from "./Menu.module.scss";

export const Menu = ({ open }: { open: boolean }) => {
  const { pagesData } = useData();
  const [localCategory, setLocalCategory] = useLocalStorage(
    "ds_y0y09_10_category",
    ""
  );
  const [expanded, setExpanded] = useState<string | boolean>(localCategory);

  const categoryList = () => {
    const list = [];
    let last = "";

    for (const page of pagesData) {
      if (page.category!.value !== last) {
        list.push(page.category);
      }
      last = page.category!.value!;
    }

    return list;
  };

  const pageList = (category: string) => {
    return pagesData.filter((page) => page.category!.value === category);
  };

  const newsPerCategory = (category: string) => {
    return pagesData.filter((page) => {
      if (page.category!.value !== category) return false;
      if (page.category!.value === category && !page.news) return false;
      return page.news;
    });
  };

  const handleExpandedChange = (category: string) => {
    setLocalCategory(expanded !== category ? category : "");
    setExpanded(expanded !== category ? category : false);
  };

  return (
    <div
      data-cy="menu"
      className={[style.menu, open ? ` ${style.open}` : ""].join("")}
    >
      {categoryList().map((category, index) => (
        <Accordion
          key={index}
          data-cy={`menu-accordion-${index}`}
          trigger={
            <>
              {category!.name}
              {newsPerCategory(category!.value!).length > 0 && (
                <span className={style.new}>new</span>
              )}
            </>
          }
          panel={
            <ul className={style.list}>
              {pageList(category!.value!).map((page, index) => (
                <li key={index}>
                  <Link to={page.path!} className={style.link}>
                    {page.name}{" "}
                    {page.news && <span className={style.new}>new</span>}
                    {page.soon && (
                      <span className={style.soon}>coming soon</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          }
          expanded={expanded === category!.value}
          onClick={() => handleExpandedChange(category!.value!)}
        />
      ))}
    </div>
  );
};
