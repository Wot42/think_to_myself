import { useState } from "react";
import { DeckData, Hand, Resource } from "../utils/typesAndInterfaces";
import { DeckRules, TableauRules } from "../utils";

const useDecks = (
  startData: DeckData[],
  tableau: TableauRules,
  setTableau: React.Dispatch<React.SetStateAction<TableauRules>>
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

  return {
    buildDeck,
    leftHandDeck,
    rightHandDeck,
    drawHandsFromMainDeck,
    clearHand,
    moveToBuildDeck,
    giveResource,
    trash,
  };
};

export default useDecks;
