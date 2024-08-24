import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { AllProviders } from "./utils/combineProviders";
import { version } from "../package.json";
import App from "./App";
import "./i18n";

console.log(
  `%c[DS]%c${version}%c@jff`,
  "padding: 4px 3px 3px; background: #1b1b1b; font-weight: bold; color: #fff;",
  "padding: 4px 3px 3px; background: #fff500; font-weight: bold; color: #1b1b1b;",
  "padding: 4px 3px 3px; background: #1b1b1b; font-weight: bold; color: #fff;"
);

ReactDOM.createRoot(document.getElementById("_ds_y0y09_10")!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
