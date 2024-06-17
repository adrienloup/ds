import { UserType } from "./User";

export interface DataType {
  data: {
    settings: {
      dir: string;
      mode: string;
      open: boolean;
    };
    user: UserType | null;
  };
  setData: (data: {
    settings: {
      dir: string;
      mode: string;
      open: boolean;
    };
    user: UserType | null;
  }) => void;
}
