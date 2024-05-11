import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { DataType } from "../../models/Data";
import { PageType } from "../../models/Page";
import { AccordionComponent } from "../Accordion/Accordion";
import style from "./Menu.module.scss";

type MenuProps = {
  pages: PageType[];
};

export const MenuComponent = ({ pages }: MenuProps) => {
  const { data, setData } = useContext<DataType>(DataContext);
  const [expanded, setExpanded] = useState<string | boolean>(data.category);

  const listed = (category: string) => {
    return pages.filter((page) => page.category === category);
  };

  const onClick = (category: string) => {
    setData({ ...data, category: expanded !== category ? category : "" });
    setExpanded(expanded !== category ? category : false);
  };

  return (
    <div className={style.menu}>
      <AccordionComponent
        title={<>Getting Started</>}
        panel={
          <ul className={style.list}>
            {listed("getting_started").map((page, index) => (
              <li key={index}>
                <Link to={page.path!}>{page.title}</Link>
              </li>
            ))}
          </ul>
        }
        onClick={() => onClick("getting_started")}
        expanded={expanded === "getting_started"}
      />
      <AccordionComponent
        title={<>Forms</>}
        panel={
          <ul className={style.list}>
            {listed("forms").map((page, index) => (
              <li key={index}>
                <Link to={page.path!}>
                  {page.title}{" "}
                  {page.novelty && <span className={style.new}>new</span>}
                </Link>
              </li>
            ))}
          </ul>
        }
        onClick={() => onClick("forms")}
        expanded={expanded === "forms"}
      />
      <AccordionComponent
        title={
          <>
            Feedback <span className={style.new}>new</span>
          </>
        }
        panel={
          <ul className={style.list}>
            {listed("feedback").map((page, index) => (
              <li key={index}>
                <Link to={page.path!}>
                  {page.title}{" "}
                  {page.novelty && <span className={style.new}>new</span>}
                </Link>
              </li>
            ))}
          </ul>
        }
        onClick={() => onClick("feedback")}
        expanded={expanded === "feedback"}
      />
      <AccordionComponent
        title={<>Navigation</>}
        panel={
          <ul className={style.list}>
            {listed("navigation").map((page, index) => (
              <li key={index}>
                <Link to={page.path!}>
                  {page.title} {page.novelty && <span>new</span>}
                </Link>
              </li>
            ))}
          </ul>
        }
        onClick={() => onClick("navigation")}
        expanded={expanded === "navigation"}
      />
      <AccordionComponent
        title={
          <>
            Pattern <span className={style.new}>new</span>
          </>
        }
        panel={
          <ul className={style.list}>
            {listed("pattern").map((page, index) => (
              <li key={index}>
                <Link to={page.path!}>
                  {page.title}{" "}
                  {page.novelty && <span className={style.new}>new</span>}
                </Link>
              </li>
            ))}
          </ul>
        }
        onClick={() => onClick("pattern")}
        expanded={expanded === "pattern"}
      />
    </div>
  );
};
