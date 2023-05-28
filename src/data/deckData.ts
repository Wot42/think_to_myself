import { DeckData } from "../utils/typesAndInterfaces";

const testDeckData: DeckData[] = [
  {
    amount: 1,
    card: {
      cost: ["b"],
      cardType: "b",
      trash: "b",
      reward: ["x"],
      production: ["b"],
      points: 1,
      pointResource: ["b"],
    },
  },
];

const testDeck5Data: DeckData[] = [
  {
    amount: 5,
    card: {
      cost: ["b"],
      cardType: "b",
      trash: "b",
      reward: ["x"],
      production: ["b"],
      points: 1,
      pointResource: ["b"],
    },
  },
];

const testDeck10Data: DeckData[] = [
  //temp please delete
  {
    amount: 20,
    card: {
      cost: ["a", "b"],
      cardType: "b",
      trash: "b",
      reward: ["x"],
      production: ["b"],
      points: 1,
      pointResource: ["b"],
    },
  },
];

export { testDeckData, testDeck5Data, testDeck10Data };
