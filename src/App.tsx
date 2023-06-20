import React, { useState } from "react";
import "./App.css";
// import TempTest from "./components/TempTest";
import "./color.css";
import { TableauRules } from "./utils";
import { testDeck10Data } from "./data/deckData";
import { Header, Tableau } from "./components";
import { BuildingDisplay, HandsDisplay, RulesDisplay } from "./features";
import { DisplayFocus } from "./utils/typesAndInterfaces";
import { useActiveResource, useDecks, useGamePhase } from "./hooks";

function App() {
  const [tableau, setTableau] = useState(new TableauRules());
  const [displayFocus, setDisplayFocus] = useState<DisplayFocus>("hands");

  const { activeResource, makeActive, takeActive } = useActiveResource(
    tableau,
    setTableau
  );

  const {
    buildDeck,
    leftHandDeck,
    rightHandDeck,
    drawHandsFromMainDeck,
    clearHand,
    moveToBuildDeck,
    giveResource,
    trash,
    showCards,
  } = useDecks(testDeck10Data, tableau, setTableau, activeResource, takeActive);

  const { gamePhase, gameTurn, firstPass } = useGamePhase(
    activeResource,
    tableau,
    makeActive,
    drawHandsFromMainDeck,
    leftHandDeck,
    rightHandDeck
  );

  return (
    <div className="app__main-container">
      <Header
        setDisplayFocus={setDisplayFocus}
        activeResource={activeResource}
        makeActive={makeActive}
        gameTurn={gameTurn}
        gamePhase={gamePhase}
        firstPass={firstPass}
        tableau={tableau}
        setTableau={setTableau}
        takeActive={takeActive}
        displayFocus={displayFocus}
      />
      <div className="app__mid-container">
        <BuildingDisplay
          displayFocus={displayFocus}
          buildDeck={buildDeck}
          giveResource={giveResource}
          showCards={showCards}
          key="BuildingDisplay"
        />
        <HandsDisplay
          displayFocus={displayFocus}
          leftHandDeck={leftHandDeck}
          rightHandDeck={rightHandDeck}
          clearHand={clearHand}
          moveToBuildDeck={moveToBuildDeck}
          trash={trash}
          showCards={showCards}
          key="HandsDisplay"
          gamePhase={gamePhase}
          makeActive={makeActive}
        />
        <RulesDisplay
          displayFocus={displayFocus}
          setDisplayFocus={setDisplayFocus}
          gamePhase={gamePhase}
        />
      </div>
      <Tableau
        tableau={tableau}
        makeActive={makeActive}
        setTableau={setTableau}
        key="tableau"
      />
    </div>
  );
}

export default App;
