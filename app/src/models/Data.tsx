import { UserType } from "./User";

export interface DataType {
  data: {
    user: UserType | null;
  };
  setData: (data: { user: UserType | null }) => void;
}
