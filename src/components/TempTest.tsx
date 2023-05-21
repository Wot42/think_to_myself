import React from "react";
import { testDeck5Data } from "../data/deckData";
import { CardRules, DeckRules, TableauRules } from "../utils";
import { CardRulesProps } from "../utils/typesAndInterfaces";

const TempTest = () => {
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
  const deck2 = new DeckRules(tableau);
  deck2.fillFrom(testDeck5Data);
  deck2.cards[0].active = false;
  deck2.reorderInactive();
  console.log("🚀 ~ file: TempTest.tsx:22 ~ TempTest ~ deck2:", deck2);

  // const testArray: CardRules[] = [];
  // testArray.push(new CardRules(card1));
  // testArray.push(new CardRules(card1));
  // console.log("🚀 ~ file: tempTest.jsx:30 ~ TempTest ~ testArray:", testArray);
  // console.log(testArray[0] == testArray[1]);
  // testArray.splice(0, 1);
  // testArray[0].active = false;
  // console.log("🚀 ~ file: tempTest.jsx:33 ~ TempTest ~ testArray:", testArray);

  return <div>tempTest</div>;
};

export default TempTest;
