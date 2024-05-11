import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import { PageType } from "../../models/Page";
import { CategoryType } from "../../models/Category";
import { MenuComponent } from "../Menu/Menu";
import style from "./Header.module.scss";

type HeaderProps = {
  pages: PageType[];
  categories: CategoryType[];
};

export const HeaderComponent = ({ pages, categories }: HeaderProps) => {
  return (
    <header role="banner" className={style.header}>
      <div className={style.inner}>
        <Link className={style.name} to={"/ds/"}>
          DS<span>v{version}</span>
        </Link>
        <MenuComponent pages={pages} categories={categories} />
      </div>
    </header>
  );
};
