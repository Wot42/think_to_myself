import React from "react";
import Card from "./Card";
import { CardRules } from "../utils";
import { CardRulesProps } from "../utils/typesAndInterfaces";

const TempTest = () => {
  var card3P: CardRulesProps = {
    cost: ["a", "b", "c", "d", "e", "x", "y", "z"],
    cardType: "a",
    trash: "a",
    reward: ["x"],
    production: ["b"],
    points: 1,
    pointResource: ["b"],
  };
  var card3 = new CardRules(card3P);
  var card2P: CardRulesProps = {
    cost: ["a", "b", "c", "d", "e", "x", "y", "z"],
    cardType: "a",
    trash: "b",
    reward: [],
    production: ["b"],
    points: 1,
    pointResource: [],
  };
  var card2 = new CardRules(card2P);

  return (
    <div>
      <div style={{ width: 300, margin: 5 }}>
        <Card card={card3} showTrash={true} />
      </div>
      <div style={{ width: 300, margin: 5 }}>
        <Card card={card3} showTrash={false} />
      </div>
      <div style={{ width: 300, margin: 5 }}>
        <Card card={card2} showTrash={false} />
      </div>
    </div>
  );
};

export default TempTest;
