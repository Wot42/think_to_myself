type BasicResource = "a" | "b" | "c" | "d" | "e";
type SpecialResource = "x" | "y" | "z";
type Resource = "a" | "b" | "c" | "d" | "e" | "x" | "y" | "z";

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
  points?: number;
  pointResource?: BasicResource[];
}

export { BasicResource, SpecialResource, Resource, DeckData, CardRulesProps };
