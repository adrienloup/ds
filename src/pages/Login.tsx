import { useState } from "react";
import { pages } from "../data/pages.json";
import { categories } from "../data/categories.json";
import { useAuth } from "../hooks/useAuth";
import { HeaderComponent } from "../components/Header/Header";
import { MainComponent } from "../components/Main/Main";
import { SettingsComponent } from "../components/Settings/Settings";
import { FooterComponent } from "../components/Footer/Footer";
import { TitleComponent } from "../components/Title/Title";
import { ScrollToTopComponent } from "../components/ScrollToTop/ScrollToTop";
import { ToolBarComponent } from "../components/ToolBar/ToolBar";
import { ButtonComponent } from "../components/Button/Button";

export default function LoginPage() {
  const [settings, setSettings] = useState<boolean>(false);
  const { login, logout } = useAuth();

  const handleLogin = () => {
    login({
      id: "1",
      name: "Adrien",
    });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <TitleComponent title="Login" />
      <HeaderComponent pages={pages} categories={categories} />
      <MainComponent>
        <ToolBarComponent onClick={() => setSettings(!settings)} />
        <h1>
          Login to <span>your account</span>
        </h1>
        <ul>
          <li>
            <ButtonComponent onClick={handleLogin}>Login</ButtonComponent>
          </li>
          <li>
            <ButtonComponent onClick={handleLogout}>Logout</ButtonComponent>
          </li>
        </ul>
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
