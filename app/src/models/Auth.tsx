import { UserType } from "./User";

export type AuthType = {
  dataAuth: {
    user: UserType | null;
  };
  setDataAuth: (dataAuth: { user: UserType | null }) => void;
};
