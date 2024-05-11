import { useState } from "react";
import { pages } from "../data/pages.json";
import { categories } from "../data/categories.json";
import { HeaderComponent } from "../components/Header/Header";
import { MainComponent } from "../components/Main/Main";
import { SettingsComponent } from "../components/Settings/Settings";
import { FooterComponent } from "../components/Footer/Footer";
import { TitleComponent } from "../components/Title/Title";
import { ScrollToTopComponent } from "../components/ScrollToTop/ScrollToTop";
import { ToolBarComponent } from "../components/ToolBar/ToolBar";

export default function NotFoundPage() {
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <>
      <TitleComponent title="Page not found" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          <span>The page is not found or it is under construction</span> but
          don't give up :)
        </h1>
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
