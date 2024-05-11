import { useContext, useRef, useState } from "react";
import { AlertContext } from "../contexts/AlertContext";
import { AlertType, AlertContextType } from "../models/Alert";

export const useAlert = () => {
  const [alertIds, setAlertIds] = useState<string[]>([]);
  const alertIdsRef = useRef(alertIds);
  const { addAlert, removeAlert } = useContext(
    AlertContext,
  ) as AlertContextType;

  const addAlertWithId = (alert: AlertType) => {
    const id = addAlert(alert);
    alertIdsRef.current.push(id);
    setAlertIds(alertIdsRef.current);
  };

  const clearAlerts = () => {
    alertIdsRef.current.forEach((id) => removeAlert(id as string));
    alertIdsRef.current = [];
    setAlertIds([]);
  };
  return { addAlert: addAlertWithId, clearAlerts };
};
