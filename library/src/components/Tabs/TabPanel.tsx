import { ReactNode } from "react";

export interface DsTabPanelType {
  children: ReactNode;
  title: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
}

export const DsTabPanel = ({ children }: DsTabPanelType) => {
  return <>{children}</>;
};
