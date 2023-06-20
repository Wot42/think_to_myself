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
  {
    amount: 5,
    card: {
      cost: ["a"],
      cardType: "a",
      trash: "a",
      reward: [],
      production: ["a"],
      points: 2,
      pointResource: [],
    },
  },
  {
    amount: 10,
    card: {
      cost: ["c"],
      cardType: "c",
      trash: "a",
      reward: ["z"],
      production: ["a"],
      productionLinkedResource: ["c"],
      points: 2,
      pointResource: [],
    },
  },
];

export { testDeckData, testDeck5Data, testDeck10Data };
