export interface SettingsType {
  dataSettings: {
    dir: string;
    mode: string;
    open: boolean;
  };
  setDataSettings: (dataSettings: {
    dir: string;
    mode: string;
    open: boolean;
  }) => void;
}
