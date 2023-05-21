import { CardRules } from "./cardRules";
import { TableauRules } from "./tableauRules";
import { DeckData, Resource } from "./typesAndInterfaces";

export class DeckRules {
  cards: CardRules[] = [];
  tableau: TableauRules;

  constructor(tableau: TableauRules) {
    this.tableau = tableau;
  }

  fillFrom(data: DeckData[]): void {
    for (let i = 0; i < data.length; i++) {
      for (let a = 0; a < data[i].amount; a++) {
        this.cards.push(new CardRules(data[i].card));
      }
    }
  }

  clear(index: number): void {
    this.cards.splice(index, 1);
  }

  drawDeck(fromDeck: DeckRules, index: number): void {
    this.cards.push(fromDeck.cards[index]);
    fromDeck.clear(index);
  }

  drawRandom(fromDeck: DeckRules, amount: number): void {
    for (let i = 0; i < amount; i++) {
      this.drawDeck(
        fromDeck,
        Math.floor(Math.random() * fromDeck.cards.length)
      );
    }
  }
  giveCardResource(index: number, resource: Resource): void {
    this.cards[index].giveResource(resource);
    if (this.cards[index].cost.length === 0) {
      this.tableau.completeCard(this.cards[index]);
      this.clear(index);
    }
  }
}
