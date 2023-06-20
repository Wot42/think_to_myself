import React, { useState } from "react";
import { DeckData, Hand, Resource } from "../utils/typesAndInterfaces";
import { DeckRules, TableauRules } from "../utils";
import { Card } from "../components";

const useDecks = (
  startData: DeckData[],
  tableau: TableauRules,
  setTableau: React.Dispatch<React.SetStateAction<TableauRules>>,
  activeResource: Resource[],
  takeActive: () => Resource
) => {
  var starerDeck = new DeckRules(tableau);
  starerDeck.fillFrom(startData);
  const [mainDeck, setMainDeck] = useState(starerDeck);
  const [buildDeck, setBuildDeck] = useState(new DeckRules(tableau));
  const [leftHandDeck, setLeftHandDeck] = useState(new DeckRules(tableau));
  const [rightHandDeck, setRightHandDeck] = useState(new DeckRules(tableau));

  const drawHandsFromMainDeck = () => {
    const main = mainDeck.copy();
    const left = leftHandDeck.copy();
    const right = rightHandDeck.copy();

    left.drawRandom(main, 5);
    right.drawRandom(main, 5);
    setMainDeck(main);
    setLeftHandDeck(left);
    setRightHandDeck(right);
  };
  const clearHand = (hand: Hand) => {
    hand === "left"
      ? setLeftHandDeck(new DeckRules(tableau))
      : setRightHandDeck(new DeckRules(tableau));
  };
  const moveToBuildDeck = (hand: Hand, index: number) => {
    const build = buildDeck.copy();
    const left = leftHandDeck.copy();
    const right = rightHandDeck.copy();

    hand === "left"
      ? build.drawDeck(left, index)
      : build.drawDeck(right, index);

    setBuildDeck(build);
    setLeftHandDeck(left);
    setRightHandDeck(right);
  };
  const giveResource = (index: number, resource: Resource) => {
    const tab = tableau.copy();
    const build = buildDeck.copy(tab);

    build.giveCardResource(index, resource);
    takeActive();

    setTableau(tab);
    build.tableau = tableau;
    setBuildDeck(build);
  };

  const trash = (hand: Hand, index: number) => {
    const left = leftHandDeck.copy();
    const right = rightHandDeck.copy();
    var resource: Resource;

    if (hand === "left") {
      resource = left.cards[index].trash;
      left.clear(index);
    } else {
      resource = right.cards[index].trash;
      right.clear(index);
    }

    setLeftHandDeck(left);
    setRightHandDeck(right);
    return resource;
  };

  const showCards = (
    deck: DeckRules,
    trash: boolean,
    id: string,
    classToAdd: string
  ) => {
    var output: JSX.Element[] = [];

    deck.cards.forEach((card, index) => {
      output.push(
        <div className={classToAdd}>
          <Card
            card={card}
            showTrash={trash}
            key={id + index}
            id={id + index}
            index={index}
            activeResource={activeResource}
            giveResource={giveResource}
          />
        </div>
      );
    });

    return <React.Fragment>{output}</React.Fragment>;
  };

  return {
    buildDeck,
    leftHandDeck,
    rightHandDeck,
    drawHandsFromMainDeck,
    clearHand,
    moveToBuildDeck,
    giveResource,
    trash,
    showCards,
  };
};

export default useDecks;
