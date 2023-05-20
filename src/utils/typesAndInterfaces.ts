type Resource = "a" | "b" | "c" | "d" | "e" | "x" | "y" | "z";

interface CardRulesProps {
  cost?: Resource[];
  cardType?: Resource;
  trash?: Resource;
  reward?: Resource[];
  production?: Resource[];
  points?: number;
  pointResource?: Resource[];
}

export { Resource, CardRulesProps };
