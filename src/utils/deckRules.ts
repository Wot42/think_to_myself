import { CardRules } from "./cardRules";
import { TableauRules } from "./tableauRules";
import { Resource } from "./typesAndInterfaces";

export class DeckRules {
  cards: CardRules[] = [];
  cardCount = 0;
  tableau: TableauRules;

  constructor(tableau: TableauRules) {
    this.tableau = tableau;
  }

  create(amount: number): void {}
  fillFrom(data: any): void {}

  reorderInactive(): void {}

  clear(index: number): void {}
  drawDeck(fromDeck: DeckRules, index: number): void {}
  drawRandom(fromDeck: DeckRules, amount: number): void {}
  giveCardResource(index: number, resource: Resource): void {}
}
