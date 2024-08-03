import { memo, useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  // console.log("Header");
  const [open, setOpen] = useState(false);

  return (
    <header role="banner" data-cy="header" className={styles.header}>
      <div className={styles.inner}>
        <LogoMemo />
        <Button cssClass={styles.burger} onClick={() => setOpen(!open)}>
          <Icon name={open ? "menu_open" : "menu"} />
        </Button>
        <Menu open={open} />
      </div>
    </header>
  );
};

const LogoMemo = memo(Logo);
