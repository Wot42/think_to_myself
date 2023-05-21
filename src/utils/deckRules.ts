import { CardRules } from "./cardRules";
import { TableauRules } from "./tableauRules";
import { DeckData, Resource } from "./typesAndInterfaces";

export class DeckRules {
  cards: CardRules[] = [];
  cardCount = 0;
  tableau: TableauRules;

  constructor(tableau: TableauRules) {
    this.tableau = tableau;
  }

  create(amount: number): void {
    for (let i = 0; i < amount; i++) {
      this.cards.push(new CardRules({}));
    }
  }

  fillFrom(data: DeckData[]): void {
    for (let i = 0; i < data.length; i++) {
      for (let a = 0; a < data[i].amount; a++) {
        this.cards.push(new CardRules(data[i].card));
      }
    }
    this.reorderInactive();
  }

  reorderInactive(): void {
    for (let i = this.cards.length - 1; i > -1; i--) {
      if (!this.cards[i].active) {
        this.cards.push(this.cards[i]);
        this.cards.splice(i, 1);
      }
    }
    const inactiveIndex = this.cards.findIndex((e) => e.active === false);
    this.cardCount = inactiveIndex > -1 ? inactiveIndex : this.cards.length;
  }

  clear(index: number): void {
    this.cards[index].active = false;
    this.reorderInactive();
  }

  drawDeck(fromDeck: DeckRules, index: number): void {}
  drawRandom(fromDeck: DeckRules, amount: number): void {}
  giveCardResource(index: number, resource: Resource): void {}
}
