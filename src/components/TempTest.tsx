import React, { useState } from "react";
import Card from "./Card";
import Tableau from "./Tableau";
import { CardRules, DeckRules, TableauRules } from "../utils";
import { CardRulesProps } from "../utils/typesAndInterfaces";
import useDecks from "../hooks/useDecks";
import { testDeck10Data } from "../data/deckData";

const TempTest = () => {
  const [tableau, setTableau] = useState(new TableauRules());
  const {
    buildDeck,
    leftHandDeck,
    rightHandDeck,
    drawHandsFromMainDeck,
    clearHand,
    moveToBuildDeck,
    giveResource,
    trash,
  } = useDecks(testDeck10Data, tableau, setTableau);

  var card3P: CardRulesProps = {
    cost: ["a", "b", "c", "d", "e", "x", "y", "z"],
    cardType: "a",
    trash: "a",
    reward: ["x"],
    production: ["b"],
    points: 1,
    pointResource: ["a"],
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

  // const tableau = new TableauRules();
  // tableau.completeCard(card3);
  // tableau.completeCard(card2);
  const logDecks = () => {
    console.log("L", leftHandDeck);
    console.log("R", rightHandDeck);
    console.log("B", buildDeck);
  };

  const showCards = (deck: DeckRules, trash: boolean, id: string) => {
    var output: JSX.Element[] = [];

    deck.cards.forEach((card, index) => {
      output.push(
        <div style={{ width: 300, margin: 5 }}>
          <Card
            card={card}
            showTrash={trash}
            key={id + index}
            id={id + index}
          />
        </div>
      );
    });

    return <React.Fragment>{output}</React.Fragment>;
  };

  return (
    <div>
      <button onClick={() => drawHandsFromMainDeck()}>thing</button>
      <button onClick={() => clearHand("right")}>right</button>
      <button onClick={() => clearHand("left")}>left</button>
      <button onClick={() => logDecks()}>log</button>
      <button onClick={() => moveToBuildDeck("left", 0)}>
        move left to Build
      </button>
      <button onClick={() => giveResource(0, "b")}>give b</button>
      {showCards(buildDeck, false, "build")}
      <button onClick={() => console.log(trash("right", 0))}>
        trash from right
      </button>

      <div style={{ width: 300, margin: 5 }}>
        <Card card={card3} showTrash={true} key="a" id="a" />
      </div>
      <div style={{ width: 300, margin: 5 }}>
        <Card card={card3} showTrash={false} key="b" id="b" />
      </div>
      <div style={{ width: 300, margin: 5 }}>
        <Card card={card2} showTrash={false} key="c" id="c" />
      </div>
      <div style={{ width: 700, margin: 0 }}>
        <Tableau tableau={tableau} key="tableau" />
      </div>
    </div>
  );
};

export default TempTest;
