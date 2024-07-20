import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import style from "./Header.module.scss";

export const Header = () => {
  // console.log("Header");
  const [open, setOpen] = useState(false);

  return (
    <header role="banner" className={style.header}>
      <div className={style.inner}>
        <Logo />
        <Button cssClass={style.burger} onClick={() => setOpen(!open)}>
          <Icon name={open ? "menu_open" : "menu"} />
        </Button>
        <Menu open={open} />
      </div>
    </header>
  );
};
