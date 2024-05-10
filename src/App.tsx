import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./contexts/DataContext";
import { useData } from "./hooks/useData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.scss";

function App() {
  const { data, setData } = useData();

  return (
    <DataContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/ds/" element={<Home />} />
          <Route path="/ds/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
