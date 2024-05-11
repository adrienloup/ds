import { useEffect, useState } from "react";
import { pages } from "../data/pages.json";
import { PageType } from "../models/Page";
import { HeaderComponent } from "../components/Header/Header";
import { MainComponent } from "../components/Main/Main";
import { SettingsComponent } from "../components/Settings/Settings";
import { FooterComponent } from "../components/Footer/Footer";
import { TitleComponent } from "../components/Title/Title";
import { ScrollToTopComponent } from "../components/ScrollToTop/ScrollToTop";
import { ToolBarComponent } from "../components/ToolBar/ToolBar";
import { PromoteComponent } from "../components/Promote/Promote";
import { CardsComponent } from "../components/Cards/Cards";
import { ButtonComponent } from "../components/Button/Button";

export default function HomePage() {
  const [settings, setSettings] = useState<boolean>(false);
  const [list, setList] = useState<PageType[]>([]);

  const listed = (category: string) => {
    return pages.filter(
      (page: { category: string }) => page.category === category
    );
  };

  useEffect(() => {
    setList([
      ...listed("action"),
      ...listed("feedback"),
      ...listed("forms"),
      ...listed("navigation"),
      ...listed("pattern"),
    ]);
  }, []);

  return (
    <>
      <TitleComponent title="Welcome!" />
      <HeaderComponent pages={pages} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          DS is an open-source <span>React component library</span>
        </h1>
        <PromoteComponent
          body={
            <p>
              It includes a comprehensive collection of prebuilt components that
              are ready for use in production right out of the box, and features
              a suite of customization options that make it easy to implement
              your own custom design system on top of our components.
            </p>
          }
          foot={<ButtonComponent to={"/ds/"}>All components</ButtonComponent>}
        />
        <h2>
          Get started with DS library today through some of these useful
          resources
        </h2>
        <CardsComponent list={listed("getting_started")} />
      </MainComponent>
      <SettingsComponent
        open={settings}
        onClick={() => {
          setSettings(false);
        }}
      />
      <FooterComponent />
      <ScrollToTopComponent />
    </>
  );
}
