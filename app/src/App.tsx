import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/Auth";
import { SettingsContextProvider } from "./contexts/Settings";
import { MenuContextProvider } from "./contexts/Menu";
import { NotificationsContextProvider } from "./contexts/Notifications";
import { AlertContextProvider } from "./contexts/Alert";
import { Loader } from "./components/Loader/Loader";
import HomePage from "./pages/Home";
import BadgePage from "./pages/Badge";
import ButtonPage from "./pages/Button";
import FabPage from "./pages/Fab";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import OverviewPage from "./pages/Overview";
import TestPage from "./pages/Test";
import "./App.scss";

function App() {
  return (
    <AuthContextProvider>
      <SettingsContextProvider>
        <MenuContextProvider>
          <NotificationsContextProvider>
            <AlertContextProvider>
              <Loader />
              <BrowserRouter>
                <Routes>
                  <Route path="/ds/" element={<HomePage />} />
                  <Route path="/ds/badge" element={<BadgePage />} />
                  <Route path="/ds/button" element={<ButtonPage />} />
                  <Route path="/ds/fab" element={<FabPage />} />
                  <Route path="/ds/login" element={<LoginPage />} />
                  <Route path="/ds/*" element={<NotFound />} />
                  <Route path="/ds/overview" element={<OverviewPage />} />
                  <Route path="/ds/test" element={<TestPage />} />
                </Routes>
              </BrowserRouter>
            </AlertContextProvider>
          </NotificationsContextProvider>
        </MenuContextProvider>
      </SettingsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
