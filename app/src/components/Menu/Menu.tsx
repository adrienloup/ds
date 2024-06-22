import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../contexts/Menu";
import { MenuType } from "../../models/Menu";
import { Accordion } from "../Accordion/Accordion";
import pages from "../../data/pages.json";
import style from "./Menu.module.scss";

export const Menu = () => {
  console.log("Menu");

  const { dataMenu, setDataMenu } = useContext<MenuType>(MenuContext);
  const [expanded, setExpanded] = useState<string | boolean>(dataMenu);

  const categoryList = () => {
    const list = [];
    let last = "";

    for (const page of pages) {
      if (page.category !== last) {
        list.push(page.category);
      }
      last = page.category;
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

  const onClick = (category: string) => {
    setDataMenu(expanded !== category ? category : "");
    setExpanded(expanded !== category ? category : false);
  };

  return (
    <div className={style.menu}>
      {categoryList().map((category, index) => (
        <Accordion
          key={index}
          title={
            <>
              {category}
              {newsPerCategory(category).length > 0 && (
                <span className={style.new}>new</span>
              )}
            </>
          }
          panel={
            <ul className={style.list}>
              {pageList(category).map((page, index) => (
                <li key={index}>
                  <Link to={page.path} className={style.link}>
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
          onClick={() => onClick(category)}
          expanded={expanded === category}
        />
      ))}
    </div>
  );
};
