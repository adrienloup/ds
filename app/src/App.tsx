import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DataContext } from "./contexts/DataContext";
// import { useData } from "./hooks/useData";
import { Loader } from "./components/Loader/Loader";
import HomePage from "./pages/Home";
import OverviewPage from "./pages/Overview";
import "./App.scss";

function App() {
  // const { data, setData } = useData();

  return (
    // <DataContext.Provider value={{ data, setData }}>
    <>
      <Loader />
      <BrowserRouter>
        <Routes>
          <Route path="/ds/" element={<HomePage />} />
          <Route path="/ds/overview" element={<OverviewPage />} />
        </Routes>
      </BrowserRouter>
      {/* </DataContext.Provider> */}
    </>
  );
}

export default App;
