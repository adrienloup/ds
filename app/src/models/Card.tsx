export type CardType = {
  name: string;
  description?: string;
  path?: string;
  category?: {
    name: string;
    value: string;
  };
  news?: boolean;
  soon?: boolean;
};
