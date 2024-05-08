import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ds/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
