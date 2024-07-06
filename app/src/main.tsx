import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/Auth";
import { SettingsProvider } from "./contexts/Settings";
import { AlertProvider } from "./contexts/Alert";
import { TaskProvider } from "./contexts/Task";
import { NotificationsProvider } from "./contexts/Notifications";
import { BannerProvider } from "./contexts/Banner";

ReactDOM.createRoot(document.getElementById("_ds_y0y09_10")!).render(
  <React.StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <AlertProvider>
          <TaskProvider>
            <NotificationsProvider>
              <BannerProvider>
                <App />
              </BannerProvider>
            </NotificationsProvider>
          </TaskProvider>
        </AlertProvider>
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>
);
