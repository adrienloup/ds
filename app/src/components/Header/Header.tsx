import { useState } from "react";
import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Menu } from "../Menu/Menu";
import style from "./Header.module.scss";

export const Header = () => {
  // console.log("Header");
  const [open, setOpen] = useState(false);

  return (
    <header role="banner" className={style.header}>
      <div className={style.inner}>
        <Link className={style.name} to={"/ds/"}>
          DS<span>v{version}</span>
        </Link>
        <Button cssClass={style.burger} onClick={() => setOpen(!open)}>
          <Icon name={open ? "menu_open" : "menu"} />
        </Button>
        <Menu open={open} />
      </div>
    </header>
  );
};
