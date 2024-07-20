import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Accordion } from "../Accordion/Accordion";
import pages from "../../assets/pages.json";
import style from "./Menu.module.scss";

export const Menu = ({ open }: { open: boolean }) => {
  // console.log("Menu");
  const [localCategory, setLocalCategory] = useLocalStorage(
    "ds_y0y09_10_category",
    ""
  );
  const [expanded, setExpanded] = useState<string | boolean>(localCategory);

  const categoryList = () => {
    const list = [];
    let last = "";

    for (const page of pages) {
      if (page.category !== last) {
        list.push(page.category);
      }
      last = page.category!;
    }

    return list;
  };

  const pageList = (category: string) => {
    return pages.filter((page) => page.category === category);
  };

  const newsPerCategory = (category: string) => {
    return pages.filter((page) => {
      if (page.category !== category) return false;
      if (page.category === category && !page.news) return false;
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
              {category}
              {newsPerCategory(category!).length > 0 && (
                <span className={style.new}>new</span>
              )}
            </>
          }
          panel={
            <ul className={style.list}>
              {pageList(category!).map((page, index) => (
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
          expanded={expanded === category}
          onClick={() => handleExpandedChange(category!)}
        />
      ))}
    </div>
  );
};
