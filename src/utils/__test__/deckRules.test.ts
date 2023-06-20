import { testDeck5Data, testDeckData } from "../../data/deckData";
import { CardRules } from "../cardRules";
import { DeckRules } from "../deckRules";
import { TableauRules } from "../tableauRules";
import { CardRulesProps } from "../typesAndInterfaces";

describe("Deck rules test", () => {
  const tableau = new TableauRules();
  const card1: CardRulesProps = {
    cost: ["b"],
    cardType: "b",
    trash: "b",
    reward: ["x"],
    production: ["b"],
    points: 1,
    pointResource: ["b"],
  };

  const deck1 = new DeckRules(tableau);
  deck1.cards.push(new CardRules(card1));
  const deckFill = new DeckRules(tableau);
  deckFill.fillFrom(testDeckData);
  it("fill from works", () => {
    expect(deckFill).toEqual(deck1);
  });

  const deck2 = deck1.copy();
  it("copped card is different object", () => expect(deck2).not.toBe(deck1));
  it("copped card has same content", () => expect(deck2).toEqual(deck1));

  // const deck3 = new DeckRules(tableau);
  // deck3.cards.push(new CardRules(card1));
  // deck3.cards.push(new CardRules(card1));
  // deck3.clear(0);
  // it("clear has inactive last", () =>
  //   expect(deck3.cards[1].active).toBe(false));

  const deck4 = new DeckRules(tableau);
  const deck5 = new DeckRules(tableau);
  deck5.cards.push(new CardRules(card1));
  deck4.drawDeck(deck5, 0);
  it("draw deck removes card", () => expect(deck5.cards.length).toBe(0));
  it("draw deck adds card", () => expect(deck4.cards.length).toBe(1));

  const deckEmpty = new DeckRules(tableau);
  const deckFill5 = new DeckRules(tableau);
  deckFill5.fillFrom(testDeck5Data);
  deckEmpty.drawRandom(deckFill5, 3);
  it("random draw gave 3", () => expect(deckEmpty.cards.length).toBe(3));
  it("random draw took 3", () => expect(deckFill5.cards.length).toBe(2));

  const deckGive = new DeckRules(tableau);
  deckGive.fillFrom(testDeck5Data);
  deckGive.giveCardResource(0, "b");
  it("give card resource cleared card", () =>
    expect(deckGive.cards.length).toBe(4));
  it("give card resource updated tableau score", () =>
    expect(tableau.finalScore()).toBe(2));
});
