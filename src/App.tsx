import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import { useData } from "./hooks/useData";
import { Loader } from "./components/Loader/Loader";
import { AlertProvider } from "./components/Alerts/AlertProvider";
import Alert from "./pages/Alert";
import Badge from "./pages/Badge";
import Breadcrumbs from "./pages/Breadcrumbs";
import Button from "./pages/Button";
import Fab from "./pages/Fab";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Modal from "./pages/Modal";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import Progress from "./pages/Progress";
import Stepper from "./pages/Stepper";
import Switch from "./pages/Switch";
import Tag from "./pages/Tag";
import TextField from "./pages/TextField";
import "./App.scss";

function App() {
  const { data, setData } = useData();

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Loader />
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/ds/alert" element={<Alert />} />
            <Route path="/ds/badge" element={<Badge />} />
            <Route path="/ds/breadcrumbs" element={<Breadcrumbs />} />
            <Route path="/ds/button" element={<Button />} />
            <Route path="/ds/fab" element={<Fab />} />
            <Route path="/ds/" element={<Home />} />
            <Route path="/ds/login" element={<Login />} />
            <Route path="/ds/modal" element={<Modal />} />
            <Route path="/ds/*" element={<NotFound />} />
            <Route path="/ds/overview" element={<Overview />} />
            <Route path="/ds/progress" element={<Progress />} />
            <Route path="/ds/stepper" element={<Stepper />} />
            <Route path="/ds/switch" element={<Switch />} />
            <Route path="/ds/tag" element={<Tag />} />
            <Route path="/ds/textfield" element={<TextField />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </DataContext.Provider>
  );
}

export default App;
