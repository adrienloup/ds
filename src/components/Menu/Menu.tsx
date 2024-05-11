import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { DataType } from "../../models/Data";
import { PageType } from "../../models/Page";
import { CategoryType } from "../../models/Category";
import { AccordionComponent } from "../Accordion/Accordion";
import style from "./Menu.module.scss";

type MenuProps = {
  pages: PageType[];
  categories: CategoryType[];
};

export const MenuComponent = ({ pages, categories }: MenuProps) => {
  const { data, setData } = useContext<DataType>(DataContext);
  const [expanded, setExpanded] = useState<string | boolean>(data.typology);

  const listed = (typology: string) => {
    return pages.filter((page) => page.typology === typology);
  };

  const onClick = (typology: string) => {
    setData({ ...data, typology: expanded !== typology ? typology : "" });
    setExpanded(expanded !== typology ? typology : false);
  };

  return (
    <div className={style.menu}>
      {categories.map((category, index) => (
        <AccordionComponent
          key={index}
          title={
            <>
              {category.title}{" "}
              {category.novelty && <span className={style.new}>new</span>}
            </>
          }
          panel={
            <ul className={style.list}>
              {listed(category.typology).map((page, index) => (
                <li key={index}>
                  <Link to={page.path}>
                    {page.title}{" "}
                    {page.novelty && <span className={style.new}>new</span>}
                  </Link>
                </li>
              ))}
            </ul>
          }
          onClick={() => onClick(category.typology)}
          expanded={expanded === category.typology}
        />
      ))}
    </div>
  );
};
