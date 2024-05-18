import { PageType } from "../../models/Page";
import { ButtonComponent } from "../Button/Button";
import { IconComponent } from "../Icon/Icon";
import style from "./Pagination.module.scss";

type PaginationType = {
  cssClass?: string;
  current: string;
  pages: PageType[];
};

export const PaginationComponent = ({
  cssClass,
  current,
  pages,
}: PaginationType) => {
  const listed: PageType[] = pages.filter(
    (page: { typology: string }) => page.typology !== "getting_started"
  );

  const index: number = listed
    .map((page: { title: string }) => page.title.toLowerCase())
    .indexOf(current);

  const previous = listed[index - 1] ?? false;
  const next = listed[index + 1] ?? false;

  return (
    <nav
      className={[style.paginationlist, cssClass ? ` ${cssClass}` : ""].join(
        ""
      )}
    >
      {previous && (
        <ButtonComponent cssClass={style.previous} to={previous.path}>
          <IconComponent name="arrow_back_ios" cssClass={style.icon} />
          {previous.title}
          <em>Component</em>
        </ButtonComponent>
      )}
      {next && (
        <ButtonComponent cssClass={style.next} to={next.path}>
          <IconComponent name="arrow_forward_ios" cssClass={style.icon} />
          {next.title}
          <em>Component</em>
        </ButtonComponent>
      )}
    </nav>
  );
};
