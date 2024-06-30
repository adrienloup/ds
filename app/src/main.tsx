import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SettingsProvider } from "./contexts/Settings";
import { AlertProvider } from "./contexts/Alert";
import { TaskProvider } from "./contexts/Task";
import { Loader } from "./components/Loader/Loader";
import { AuthProvider } from "./contexts/Auth";

ReactDOM.createRoot(document.getElementById("_ds_y0y09_10")!).render(
  <React.StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <AlertProvider>
          <TaskProvider>
            <App />
            <Loader />
          </TaskProvider>
        </AlertProvider>
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>
);
