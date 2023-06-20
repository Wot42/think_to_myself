import React, { useState } from "react";
import "./css/Header.css";
import { DisplayFocus, GamePhase, Resource } from "../utils/typesAndInterfaces";
import { TableauRules } from "../utils";
import ResourceBox from "./ResourceBox";

interface Props {
  setDisplayFocus: React.Dispatch<React.SetStateAction<DisplayFocus>>;
  activeResource: Resource[];
  makeActive: (resource: Resource) => void;
  gameTurn: number;
  firstPass: boolean;
  gamePhase: GamePhase;
  tableau: TableauRules;
  setTableau: React.Dispatch<React.SetStateAction<TableauRules>>;
  takeActive: () => Resource;
  displayFocus: DisplayFocus;
}

const Header = ({
  setDisplayFocus,
  activeResource,
  makeActive,
  gameTurn,
  gamePhase,
  firstPass,
  tableau,
  setTableau,
  takeActive,
  displayFocus,
}: Props) => {
  const [zFifths, setZFifths] = useState(0);
  const phaseString = () => {
    if (gamePhase === "select hand" || gamePhase === "trash or treasure") {
      if (firstPass) {
        return gamePhase + " 1";
      } else {
        return gamePhase + " 2";
      }
    }
    return gamePhase;
  };

  const addFifth = () => {
    if (activeResource.length > 0) {
      takeActive();
      if (zFifths === 4) {
        setZFifths(0);
        const tab = tableau.copy();
        tab.cards.z++;
        setTableau(tab);
      } else {
        setZFifths(zFifths + 1);
      }
    }
  };

  const showActive = () => {
    if (activeResource.length > 0) {
      var output: JSX.Element[] = [];

      for (let i = 0; i < activeResource.length; i++) {
        output.push(
          <ResourceBox
            resource={activeResource[i]}
            key={"headerA" + i}
            id={"headerA" + i}
          />
        );
      }
      return <React.Fragment> {output}</React.Fragment>;
    } else {
      return <React.Fragment> No Active Resources</React.Fragment>;
    }
  };

  return (
    <div className="header">
      <div className="header__txt-box">
        <div className="header__section color__neutral app__default-cursor">
          Round: {gameTurn}
        </div>
        <div className="header__section color__neutral app__default-cursor">
          {phaseString()}
        </div>
        <div
          className="header__section color__neutral app__hover"
          onClick={() => {
            setDisplayFocus("rules");
          }}
        >
          Rules
        </div>
      </div>

      <div className="header__row">
        <div className="header__section color__neutral app__default-cursor">
          {showActive()}
        </div>
        <div
          className={`header__section--fifths color__z ${
            activeResource.length > 0 ? "app__hover" : "app__default-cursor"
          }`}
          onClick={() => {
            addFifth();
          }}
        >
          {zFifths}/5
        </div>
      </div>
      <div className="header__txt-box app__show--slim">
        <div
          className={`header__section app__hover ${
            displayFocus === "building"
              ? "color__neutral--shaded"
              : "color__neutral"
          }`}
          onClick={() => {
            setDisplayFocus("building");
          }}
        >
          Build
        </div>
        <div
          className={`header__section app__hover ${
            displayFocus === "hands"
              ? "color__neutral--shaded"
              : "color__neutral"
          }`}
          onClick={() => {
            setDisplayFocus("hands");
          }}
        >
          Hands
        </div>
      </div>
    </div>
  );
};

export default Header;
