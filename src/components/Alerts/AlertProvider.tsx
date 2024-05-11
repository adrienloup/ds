import { useState } from "react";
import { createPortal } from "react-dom";
import { AlertContext } from "../../contexts/AlertContext";
import { SlotType } from "../../models/Slot";
import { AlertType } from "../../models/Alert";
import { AlertsComponent } from "../../components/Alerts/Alerts";
import { AlertComponent } from "../../components/Alerts/Alert";

export const AlertProvider = ({ children }: SlotType) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = (alert: AlertType) => {
    const id =
      Math.random().toString(36).slice(2, 9) +
      new Date().getTime().toString(36);
    setAlerts((prev) => [{ ...alert, id: id }, ...prev]);
    return id;
  };

  const removeAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert: AlertType) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {alerts.length > 0 &&
        createPortal(
          <AlertsComponent>
            {alerts.map((alert: AlertType) => (
              <AlertComponent
                key={alert.id}
                {...alert}
                handleRemove={() => {
                  removeAlert(alert.id as string);
                }}
              />
            ))}
          </AlertsComponent>,
          document.body
        )}
      {children}
    </AlertContext.Provider>
  );
};
