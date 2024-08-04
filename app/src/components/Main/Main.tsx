import { useRef } from "react";
import { SlotType } from "../../models/Slot";
import { ToolsBar } from "../ToolsBar/ToolsBar";
import { Settings } from "../Settings/Settings";
import { Banner } from "../Banner/Banner";
import i18n from "../../i18n";
import styles from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  // console.log("Main");
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <main role="main" data-cy="main" className={styles.main}>
      <ToolsBar targetRef={targetRef} />
      <Settings targetRef={targetRef} />
      {/* <Banner
        id="banner0"
        status="warning"
        text={i18n.t("component.banner.banner0")}
      /> */}
      <Banner
        id="banner1"
        text={i18n.t("component.banner.banner1", {
          link: "<a href='https://github.com/adrienloup/ds' target='_blank' rel='noopener'>GitHub</a>",
        })}
      />
      <div className={styles.inner}>{children}</div>
    </main>
  );
};
