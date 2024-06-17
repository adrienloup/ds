import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./contexts/DataContext";
import { MenuContextProvider } from "./contexts/MenuContext";
import { NotificationContextProvider } from "./contexts/NotificationContext";
import { AlertContextProvider } from "./contexts/AlertContext";
import { Loader } from "./components/Loader/Loader";
import HomePage from "./pages/Home";
import ButtonPage from "./pages/Button";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import OverviewPage from "./pages/Overview";
import TestPage from "./pages/Test";
import "./App.scss";

function App() {
  return (
    <DataContextProvider>
      <MenuContextProvider>
        <NotificationContextProvider>
          <AlertContextProvider>
            <Loader />
            <BrowserRouter>
              <Routes>
                <Route path="/ds/" element={<HomePage />} />
                <Route path="/ds/button" element={<ButtonPage />} />
                <Route path="/ds/login" element={<LoginPage />} />
                <Route path="/ds/*" element={<NotFound />} />
                <Route path="/ds/overview" element={<OverviewPage />} />
                <Route path="/ds/test" element={<TestPage />} />
              </Routes>
            </BrowserRouter>
          </AlertContextProvider>
        </NotificationContextProvider>
      </MenuContextProvider>
    </DataContextProvider>
  );
}

export default App;
