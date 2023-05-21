import { testDeck5Data, testDeckData } from "../../data/deckData";
import { CardRules } from "../cardRules";
import { DeckRules } from "../deckRules";
import { TableauRules } from "../tableauRules";
import { CardRulesProps } from "../typesAndInterfaces";

describe("Deck rules test", () => {
  const tableau = new TableauRules();

  it("create works", () => {
    const deckCreate = new DeckRules(tableau);
    deckCreate.create(5);

    expect(deckCreate.cards.length).toBe(5);
  });

  const card1: CardRulesProps = {
    cost: ["b"],
    cardType: "b",
    trash: "b",
    reward: ["x"],
    production: ["b"],
    points: 1,
    pointResource: ["b"],
  };

  it("fill from works", () => {
    const deck1 = new DeckRules(tableau);
    deck1.cards.push(new CardRules(card1));
    deck1.cardCount = 1;
    const deckFill = new DeckRules(tableau);
    deckFill.fillFrom(testDeckData);

    expect(deckFill).toEqual(deck1);
  });

  const deck2 = new DeckRules(tableau);
  deck2.cards.push(new CardRules(card1));
  deck2.cards.push(new CardRules(card1));
  deck2.cards[0].active = false;
  deck2.reorderInactive();
  it("reorder puts active first", () =>
    expect(deck2.cards[0].active).toBe(true));

  it("reorder has inactive last", () =>
    expect(deck2.cards[1].active).toBe(false));
  it("reorder has updated cardCount", () => expect(deck2.cardCount).toBe(1));

  const deck3 = new DeckRules(tableau);
  deck3.cards.push(new CardRules(card1));
  deck3.cards.push(new CardRules(card1));
  deck3.clear(0);
  it("clear has inactive last", () =>
    expect(deck3.cards[1].active).toBe(false));

  const deck4 = new DeckRules(tableau);
  deck4.create(5);
  const deck5 = new DeckRules(tableau);
  deck5.cards.push(new CardRules(card1));
  deck4.drawDeck(deck5, 0);
  it("draw deck removes card", () => expect(deck5.cards[0].active).toBe(false));
  it("draw deck adds card", () => expect(deck4.cards[0].active).toBe(true));
  it("draw deck keeps length constant", () =>
    expect(deck4.cards.length).toBe(5));
  // test no space to draw error
  //test draw inactive error

  const deckEmpty = new DeckRules(tableau);
  deckEmpty.create(5);
  const deckFill5 = new DeckRules(tableau);
  deckFill5.fillFrom(testDeck5Data);
  deckEmpty.drawRandom(deckFill5, 3);
  it("random draw gave 3", () => expect(deckEmpty.cardCount).toBe(3));
  it("random draw took 3", () => expect(deckFill5.cardCount).toBe(2));

  const deckGive = new DeckRules(tableau);
  deckGive.fillFrom(testDeck5Data);
  deckGive.giveCardResource(0, "b");
  it("give card resource cleared card", () =>
    expect(deckEmpty.cardCount).toBe(4));
  it("give card resource updated tableau score", () =>
    expect(tableau.score).toBe(1));
});
