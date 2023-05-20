import { CardRules } from "./cardRules";

export class TableauRules {
  aCards = 0;
  aProduction = 0;
  aScore = 0;
  bCards = 0;
  bProduction = 0;
  bScore = 0;
  cCards = 0;
  cProduction = 0;
  cScore = 0;
  dCards = 0;
  dProduction = 0;
  dScore = 0;
  eCards = 0;
  eProduction = 0;
  eScore = 0;
  xResources = 0;
  yResources = 0;
  zResources = 0;
  score = 0;

  completeCard(card: CardRules) {}

  subScore(): number[] {
    return [];
  }
  finalScore(): number {
    return 0;
  }
}
