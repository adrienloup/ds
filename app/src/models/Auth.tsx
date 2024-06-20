import { UserType } from "./User";

export interface AuthType {
  dataAuth: {
    user: UserType | null;
  };
  setDataAuth: (dataAuth: { user: UserType | null }) => void;
}
