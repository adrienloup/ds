import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header role="banner" className={style.header}>
      <div className={style.inner}>
        <Link className={style.name} to={"/ds/"}>
          DS<span>v{version}</span>
        </Link>
      </div>
    </header>
  );
};
