export type CardType = {
  title?: string;
  text?: string;
  path?: string;
  novelty?: boolean;
};

export type CardsType = {
  list: CardType[];
};
