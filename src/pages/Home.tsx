import { useEffect, useState } from "react";
import { pages } from "../data/pages.json";
import { categories } from "../data/categories.json";
import { PageType } from "../models/Page";
import { HeaderComponent } from "../components/Header/Header";
import { MainComponent } from "../components/Main/Main";
import { SettingsComponent } from "../components/Settings/Settings";
import { FooterComponent } from "../components/Footer/Footer";
import { TitleComponent } from "../components/Title/Title";
import { ScrollToTopComponent } from "../components/ScrollToTop/ScrollToTop";
import { ToolBarComponent } from "../components/ToolBar/ToolBar";
import { PromoteComponent } from "../components/Promote/Promote";
import { SearchbarComponent } from "../components/Searchbar/Searchbar";
import { CardsComponent } from "../components/Cards/Cards";
import { ButtonComponent } from "../components/Button/Button";

export default function HomePage() {
  const [settings, setSettings] = useState<boolean>(false);
  const [list, setList] = useState<PageType[]>([]);

  const listed = () => {
    return pages.filter(
      (page: { typology: string }) => page.typology !== "getting_started"
    );
  };

  useEffect(() => {
    setList(listed());
  }, []);

  return (
    <>
      <TitleComponent title="Welcome!" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          A pretty good library{" "}
          <span>of components for Web application's UI</span>
        </h1>
        <PromoteComponent
          body={
            <p>
              DS library offers a comprehensive suite of free UI tools to help
              you ship new features faster Start with fully-loaded component
              library, or bring your own design system to our production-ready
              components.
            </p>
          }
          foot={
            <>
              <ButtonComponent to={"/ds/overview"}>Overview</ButtonComponent>
              <ButtonComponent to={"/ds/usage"}>Usage</ButtonComponent>
            </>
          }
        />
        <SearchbarComponent
          label={`${list.length} component${list.length > 1 ? "s" : ""}`}
          placeholder="UI components"
          update={(value: string) =>
            setList(
              listed().filter((page: { title: string }) =>
                page.title.toLowerCase().includes(value)
              )
            )
          }
        />
        <CardsComponent list={list} />
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
