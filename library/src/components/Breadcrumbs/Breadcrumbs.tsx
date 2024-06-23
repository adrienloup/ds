import { Link } from "react-router-dom";
import { DsIcon } from "../Icon/Icon";
import "./Breadcrumbs.scss";

export interface DsBreadcrumbsItemType {
  title: string;
  path?: string;
  current?: boolean;
}

export interface BreadcrumbsType {
  list: DsBreadcrumbsItemType[];
  size?: "small" | "medium" | "large";
}

export const DsBreadcrumbs = ({ list, size = "medium" }: BreadcrumbsType) => {
  return (
    <nav
      role="navigation"
      aria-label="Breadcrumb"
      className={["ds-breadcrumbs", ` ds-breadcrumbs-${size}`].join("")}
    >
      {list && (
        <ul className={"ds-breadcrumbs_list"}>
          {list.map((item, index) => (
            <li key={index} className={"ds-breadcrumbs_item"}>
              <Link
                to={item.path!}
                aria-current={item.current ? "page" : undefined}
                tabIndex={item.current ? -1 : undefined}
                className={[
                  "ds-breadcrumbs_link",
                  item.current ? ` ${"ds-breadcrumbs_current"}` : "",
                ].join("")}
              >
                {item.title}
              </Link>
              {!item.current && (
                <DsIcon cssClass={"ds-breadcrumbs_icon"} name="arrow_right" />
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
