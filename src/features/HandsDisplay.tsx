import React, { useState } from "react";
import "./css/HandsDisplay.css";
import {
  DisplayFocus,
  GamePhase,
  Hand,
  Resource,
} from "../utils/typesAndInterfaces";
import { DeckRules } from "../utils";

interface Props {
  displayFocus: DisplayFocus;
  leftHandDeck: DeckRules;
  rightHandDeck: DeckRules;
  clearHand: (hand: Hand) => void;
  moveToBuildDeck: (hand: Hand, index: number) => void;
  trash: (hand: Hand, index: number) => Resource;
  showCards: (
    deck: DeckRules,
    trash: boolean,
    id: string,
    classToAdd: string
  ) => JSX.Element;
  gamePhase: GamePhase;
  makeActive: (resource: Resource) => void;
}

const HandsDisplay = ({
  displayFocus,
  leftHandDeck,
  rightHandDeck,
  clearHand,
  moveToBuildDeck,
  trash,
  showCards,
  gamePhase,
  makeActive,
}: Props) => {
  const [activeHand, setActiveHand] = useState<Hand>("left");

  const handSelector = () => {
    return (
      <div
        className={`hands-display__hand-selector${
          gamePhase === "select hand" ? "" : " app__hide"
        }`}
      >
        <button
          className="hands-display__hand-selector--button color__neutral--shaded app__hover"
          onClick={() => handSelected("left", "right")}
        >
          Keep Left Hand
        </button>
        <button
          className="hands-display__hand-selector--button color__neutral--shaded app__hover"
          onClick={() => handSelected("right", "left")}
        >
          Keep Right Hand
        </button>
      </div>
    );
  };
  const trashTressure = () => {
    return (
      <div
        className={`hands-display__column-flex${
          gamePhase === "trash or treasure" ? "" : " app__hide"
        }`}
      >
        {updateTrashTressureButtons()}
      </div>
    );
  };
  const handSelected = (keepHand: Hand, loseHand: Hand) => {
    setActiveHand(keepHand);
    clearHand(loseHand);
  };
  const updateTrashTressureButtons = () => {
    const activeDeck = activeHand === "left" ? leftHandDeck : rightHandDeck;
    const trashTressureButtons: JSX.Element[] = [];
    for (let i = 0; i < activeDeck.cards.length; i++) {
      trashTressureButtons.push(
        <div className="hands-display__tt-box">
          <button
            className="hands-display__tt-box--build-button color__neutral--shaded app__hover"
            onClick={() => {
              moveToBuildDeck(activeHand, i);
            }}
          >
            Build
          </button>

          <button
            className="hands-display__tt-box--trash-button color__neutral--shaded app__hover"
            onClick={() => {
              makeActive(activeDeck.cards[i].trash);
              trash(activeHand, i);
            }}
          >
            Trash for resource
          </button>
        </div>
      );
    }
    return trashTressureButtons;
  };

  return (
    <div
      className={`hands-display__container${
        displayFocus === "hands" ? "" : " app__hide--slim"
      }${displayFocus === "rules" ? " app__hide" : ""}`}
    >
      {handSelector()}
      <div className="hands-display__main-row">
        <div
          className={`hands-display__column-flex${
            leftHandDeck.cards.length === 0 ? " app__hide" : ""
          }`}
        >
          {showCards(leftHandDeck, true, "left hand", "hands-display__cards")}
        </div>
        {trashTressure()}
        <div
          className={`hands-display__column-flex${
            rightHandDeck.cards.length === 0 ? " app__hide" : ""
          }`}
        >
          {showCards(rightHandDeck, true, "right hand", "hands-display__cards")}
        </div>
      </div>
    </div>
  );
};

export default HandsDisplay;
