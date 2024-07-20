import { SlotType } from "../../models/Slot";

export const Title = ({ children }: SlotType) => {
  return <h1 data-cy="title">{children}</h1>;
};
