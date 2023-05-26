import { CardRules } from "../cardRules";
import { TableauRules } from "../tableauRules";

describe("Tableau rules test", () => {
  const tab1 = new TableauRules();
  const tab2 = new TableauRules();
  const card1 = new CardRules({
    cost: [],
    cardType: "b",
    trash: "b",
    reward: ["x"],
    production: ["b"],
    points: 1,
    pointResource: ["b"],
  });

  tab2.cards["b"] = 1;
  tab2.cards["x"] = 1;
  tab2.production["b"] = 1;
  tab2.resourceScore["b"] = 1;

  tab1.completeCard(card1);

  it("complete card works", () => expect(tab1).toEqual(tab2));

  it("sub score works", () =>
    expect(tab1.subScore()).toEqual([0, 1, 0, 0, 0, 1, 0, 0]));

  it("final score works", () => expect(tab1.finalScore()).toBe(2));
});
