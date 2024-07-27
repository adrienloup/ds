import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { AllProviders } from "./utils/combineProviders";
import App from "./App";
import "./i18n";

ReactDOM.createRoot(document.getElementById("_ds_y0y09_10")!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
