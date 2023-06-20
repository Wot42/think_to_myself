import { CardRules } from "../cardRules";
import { Resource } from "../typesAndInterfaces";

describe("card rules test", () => {
  it("defaults load", () => {
    const cardBlank = new CardRules({});
    const cardBlankTemplate = new CardRules({
      cost: ["a"],
      cardType: "a",
      trash: "a",
      reward: [],
      production: [],
      productionLinkedResource: [],
      points: 0,
      pointResource: [],
    });

    expect(cardBlank).toEqual(cardBlankTemplate);
  });

  it("copy works", () => {
    const fullResources: Resource[] = ["a", "b", "c", "d", "e", "x", "y", "z"];
    const card1 = new CardRules({
      cost: fullResources,
      cardType: "b",
      trash: "b",
      reward: ["x"],
      production: ["b"],
      points: 1,
      pointResource: ["b"],
    });
    const cardCopy = new CardRules({});
    cardCopy.copy(card1);

    expect(cardCopy).toEqual(card1);
  });

  it("has resource", () => {
    const cardHasResource = new CardRules({});

    expect(cardHasResource.hasResource("a")).toBe(true);
  });

  const cardGotResource = new CardRules({});

  cardGotResource.giveResource("a");
  it("took resource", () => expect(cardGotResource.cost).toEqual([]));
  it("doesn't have resource", () =>
    expect(cardGotResource.hasResource("a")).toBe(false));
});
