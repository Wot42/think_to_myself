import React from "react";
import "./css/BuildingDisplay.css";
import { DisplayFocus, Resource } from "../utils/typesAndInterfaces";
import { DeckRules } from "../utils";

interface Props {
  displayFocus: DisplayFocus;
  buildDeck: DeckRules;
  giveResource: (index: number, resource: Resource) => void;
  showCards: (
    deck: DeckRules,
    trash: boolean,
    id: string,
    classToAdd: string
  ) => JSX.Element;
}

const BuildingDisplay = ({
  displayFocus,
  buildDeck,
  giveResource,
  showCards,
}: Props) => {
  return (
    <div
      className={`building-display__container color__neutral--shaded${
        displayFocus === "building" ? "" : " app__hide--slim"
      }${displayFocus === "rules" ? " app__hide" : ""}`}
    >
      <div className="building-display__main-flex">
        {showCards(buildDeck, false, "build", "building-display__cards")}
      </div>
    </div>
  );
};

export default BuildingDisplay;
