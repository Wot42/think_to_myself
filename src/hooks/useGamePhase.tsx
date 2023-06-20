import { useState } from "react";
import {
  BasicResource,
  GamePhase,
  Resource,
} from "../utils/typesAndInterfaces";
import { DeckRules, TableauRules } from "../utils";

const useGamePhase = (
  activeResource: Resource[],
  tableau: TableauRules,
  makeActive: (resource: Resource, amount?: number) => void,
  drawHandsFromMainDeck: () => void,
  leftHandDeck: DeckRules,
  rightHandDeck: DeckRules
) => {
  const [gamePhase, setGamePhase] = useState<GamePhase>("produce e");
  const [gameTurn, setGameTurn] = useState(0);
  const [firstPass, setFirstPass] = useState(true);

  const queProduction = (resource: BasicResource) => {
    const amount = tableau.produce(resource);
    makeActive(resource, amount);
  };

  if (
    gamePhase === "select hand" &&
    (leftHandDeck.cards.length === 0 || rightHandDeck.cards.length === 0)
  ) {
    setGamePhase("trash or treasure");
  } else if (
    gamePhase === "trash or treasure" &&
    activeResource.length === 0 &&
    leftHandDeck.cards.length === 0 &&
    rightHandDeck.cards.length === 0
  ) {
    if (firstPass) {
      drawHandsFromMainDeck();
      setFirstPass(false);
      setGamePhase("select hand");
    } else {
      queProduction("a");
      setGamePhase("produce a");
    }
  } else if (gamePhase === "produce a" && activeResource.length === 0) {
    queProduction("b");
    setGamePhase("produce b");
  } else if (gamePhase === "produce b" && activeResource.length === 0) {
    queProduction("c");
    setGamePhase("produce c");
  } else if (gamePhase === "produce c" && activeResource.length === 0) {
    queProduction("d");
    setGamePhase("produce d");
  } else if (gamePhase === "produce d" && activeResource.length === 0) {
    queProduction("e");
    setGamePhase("produce e");
  } else if (gamePhase === "produce e" && activeResource.length === 0) {
    if (gameTurn === 4) {
      setGamePhase("ended");
    } else {
      drawHandsFromMainDeck();
      setFirstPass(true);
      setGameTurn(gameTurn + 1);
      setGamePhase("select hand");
    }
  }

  return {
    gamePhase,
    gameTurn,
    firstPass,
  };
};

export default useGamePhase;
