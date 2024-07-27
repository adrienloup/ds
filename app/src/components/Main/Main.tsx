import { SlotType } from "../../models/Slot";
import { ToolsBar } from "../ToolsBar/ToolsBar";
import { Settings } from "../Settings/Settings";
import { Banner } from "../Banner/Banner";
import i18n from "../../i18n";
import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  // console.log("Main");

  return (
    <main role="main" data-cy="main" className={style.main}>
      <ToolsBar />
      <Settings />
      <Banner
        id="_ds_b0b08_0"
        status="warning"
        text={i18n.t("component.banner.banner0")}
      />
      <Banner
        id="_ds_b0b08_1"
        text={i18n.t("component.banner.banner1", {
          link: "<a href='https://github.com/adrienloup/ds' target='_blank' rel='noopener'>GitHub</a>",
        })}
      />
      <div className={style.inner}>{children}</div>
    </main>
  );
};
