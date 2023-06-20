type BasicResource = "a" | "b" | "c" | "d" | "e";
type SpecialResource = "x" | "y" | "z";
type Resource = "a" | "b" | "c" | "d" | "e" | "x" | "y" | "z";
type Hand = "left" | "right";
type DisplayFocus = "rules" | "hands" | "building" | "ended";
type GamePhase =
  | "select hand"
  | "trash or treasure"
  | "produce a"
  | "produce b"
  | "produce c"
  | "produce d"
  | "produce e"
  | "ended";

interface DeckData {
  amount: number;
  card: CardRulesProps;
}

interface CardRulesProps {
  cost?: Resource[];
  cardType?: BasicResource;
  trash?: Resource;
  reward?: SpecialResource[];
  production?: BasicResource[];
  productionLinkedResource?: BasicResource[];
  points?: number;
  pointResource?: BasicResource[];
}

export {
  BasicResource,
  SpecialResource,
  Resource,
  DeckData,
  CardRulesProps,
  Hand,
  DisplayFocus,
  GamePhase,
};
