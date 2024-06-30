import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import HomePage from "./pages/Home";
import BadgePage from "./pages/Badge";
import BreadcrumbsPage from "./pages/Breadcrumbs";
import ButtonPage from "./pages/Button";
import FabPage from "./pages/Fab";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import ModalPage from "./pages/Modal";
import OverviewPage from "./pages/Overview";
import ProgressPage from "./pages/Progress";
import StepperPage from "./pages/Stepper";
import SwitchPage from "./pages/Switch";
import TabsPage from "./pages/Tabs";
import TagPage from "./pages/Tag";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ds/" element={<HomePage />} />
          <Route path="/ds/badge" element={<BadgePage />} />
          <Route path="/ds/breadcrumbs" element={<BreadcrumbsPage />} />
          <Route path="/ds/button" element={<ButtonPage />} />
          <Route path="/ds/fab" element={<FabPage />} />
          <Route path="/ds/login" element={<LoginPage />} />
          <Route path="/ds/modal" element={<ModalPage />} />
          <Route path="/ds/overview" element={<OverviewPage />} />
          <Route path="/ds/progress" element={<ProgressPage />} />
          <Route path="/ds/stepper" element={<StepperPage />} />
          <Route path="/ds/switch" element={<SwitchPage />} />
          <Route path="/ds/tabs" element={<TabsPage />} />
          <Route path="/ds/tag" element={<TagPage />} />
          <Route path="/ds/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Loader />
    </>
  );
}

export default App;
