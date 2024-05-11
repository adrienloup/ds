import { Link } from "react-router-dom";
import { DsIcon } from "../Icon/Icon";
import style from "./Breadcrumbs.module.scss";

type BreadcrumbsItemType = {
  title: string;
  path?: string;
  current?: boolean;
};

type BreadcrumbsProps = {
  list: BreadcrumbsItemType[];
  size?: "small" | "medium" | "large";
};

export const DsBreadcrumbs = ({ list, size = "medium" }: BreadcrumbsProps) => {
  return (
    <nav
      role="navigation"
      aria-label="Breadcrumb"
      className={[style.breadcrumbs, ` ${style[size]}`].join("")}
    >
      {list && (
        <ul className={style.list}>
          {list.map((item, index) => (
            <li key={index} className={style.item}>
              <Link
                to={item.path!}
                aria-current={item.current ? "page" : undefined}
                tabIndex={item.current ? -1 : undefined}
                className={[
                  style.link,
                  item.current ? ` ${style.current}` : "",
                ].join("")}
              >
                {item.title}
              </Link>
              {!item.current && (
                <DsIcon cssClass={style.icon} name="arrow_right" />
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
