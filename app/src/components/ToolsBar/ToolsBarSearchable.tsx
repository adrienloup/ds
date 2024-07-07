import { useState } from "react";
import { Link } from "react-router-dom";
import { PageType } from "../../models/Page";
import { SearchBar } from "../SearchBar/SearchBar";
import { Empty } from "../Empty/Empty";
import { Icon } from "../Icon/Icon";
import pages from "../../assets/pages.json";
import style from "./ToolsBar.module.scss";

export const ToolsBarSearchable = () => {
  // console.log("ToolsBarSearchable");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const list = pages.filter((page: PageType) => {
    if (page.category === "getting started") return false;
    if (value && !page.name.includes(value)) return false;
    return true;
  });

  return (
    <div
      className={[style.toolsbarsearchable, open ? ` ${style.open}` : ""].join(
        ""
      )}
      onClick={() => setOpen(!open)}
    >
      <SearchBar
        cssClass={[style.searchbar, style.textfield]}
        placeholder="What are you looking for?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {list.length > 0 ? (
        <ul className={style.list}>
          {list.map((item, index) => (
            <li key={index}>
              <Link to={item.path!} className={style.link}>
                <span className={style.text}>
                  <span className={style.name}>{item.name}</span>
                  <span className={style.description}>{item.description}</span>
                </span>
                <Icon name="link" cssClass={style.icon} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Empty
          text="Nothing matches your search but don't give up :)"
          cssClass={style.empty}
        />
      )}
      <div
        className={style.backdrop}
        onClick={() => setOpen(false)}
        style={{
          height: `${document.body.offsetHeight}px`,
        }}
      ></div>
    </div>
  );
};
