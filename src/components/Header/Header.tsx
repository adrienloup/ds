import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import { PageType } from "../../models/Page";
import style from "./Header.module.scss";

type HeaderProps = {
  pages: PageType[];
};

export const Header = ({ pages }: HeaderProps) => {
  return (
    <header role="banner" className={style.header}>
      <div className={style.inner}>
        <Link className={style.name} to={"/ds/"}>
          DS<span>v{version}</span>
        </Link>
        {JSON.stringify(pages)}
        {/* <Menu pages={pages} /> */}
      </div>
    </header>
  );
};
