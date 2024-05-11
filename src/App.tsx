import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import { AlertProvider } from "./components/Alerts/AlertProvider";
import { useData } from "./hooks/useData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.scss";

function App() {
  const { data, setData } = useData();

  return (
    <DataContext.Provider value={{ data, setData }}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/ds/" element={<Home />} />
            <Route path="/ds/login" element={<Login />} />
            <Route path="/ds/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </DataContext.Provider>
  );
}

export default App;
