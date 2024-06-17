export interface SettingType {
  dataSettings: {
    dir: string;
    mode: string;
    open: boolean;
  };
  setDataSetting: (dataSettings: {
    dir: string;
    mode: string;
    open: boolean;
  }) => void;
}
