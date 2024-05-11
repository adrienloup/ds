import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import { useData } from "./hooks/useData";
import { Loader } from "./components/Loader/Loader";
import { AlertProvider } from "./components/Alerts/AlertProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import "./App.scss";

function App() {
  const { data, setData } = useData();

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Loader />
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/ds/" element={<Home />} />
            <Route path="/ds/login" element={<Login />} />
            <Route path="/ds/*" element={<NotFound />} />
            <Route path="/ds/overview" element={<Overview />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </DataContext.Provider>
  );
}

export default App;
