import React from "react";
import { DisplayFocus, GamePhase, Resource } from "../utils/typesAndInterfaces";
import "./css/RulesDisplay.css";
import { Card } from "../components";
import { CardRules } from "../utils";

// end game score 60/80/100

interface Props {
  displayFocus: DisplayFocus;
  setDisplayFocus: React.Dispatch<React.SetStateAction<DisplayFocus>>;
  gamePhase: GamePhase;
}

const RulesDisplay = ({ displayFocus, setDisplayFocus, gamePhase }: Props) => {
  const onClose = () => {
    if (gamePhase === "select hand" || gamePhase === "trash or treasure") {
      setDisplayFocus("hands");
    } else if (gamePhase === "ended") {
      setDisplayFocus("ended");
    } else {
      setDisplayFocus("building");
    }
  };

  return (
    <div
      className={`rules-display__container ${
        displayFocus === "rules" ? "" : " app__hide"
      }`}
    >
      <div className={`rules-display__main color__neutral--shaded`}>
        <button
          className="rules-display__close-button color__neutral--shaded app__hover"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
        <h1>Rules</h1>
        <p>
          I think to myself is a engine building card game. Your goal is to make
          the most VP at the end of 4 turns. Each turn is broken into phases:
        </p>
        <h3>Draw phase:</h3>
        <p>
          Cards will be drawn into two 5 card hands. Look at each hand and
          select the set of 5 cards you want to keep.
        </p>
        <h3>Trash or treasure:</h3>
        <p>
          Each card you kept can either be kept and sent to the build que, or
          trashed to give you a spendable resource that can be used to pay for
          cards in your build que.
        </p>
        <p>
          A list of your spendable resources will be kept at the top of the
          screen. If you can't spend your resource on any cards you can click on
          the /5 Z in the upper right to add a fifth of a wild Z resource.
        </p>
        <p>
          You can select X, Y or Z from the bottom row to add them to your
          spendable que. When you complete a card it gets added to your tableau
          at the bottom.
        </p>
        <h3>The parts of the card are:</h3>
        <div className="rules-display__card">
          <Card
            card={
              new CardRules({
                trash: "b",
                reward: ["z", "z"],
                production: ["a"],
                productionLinkedResource: ["b"],
                points: 2,
                pointResource: ["a"],
              })
            }
            showTrash={true}
            id="rules0"
            key={"rules0"}
            giveResource={(index: number, resource: Resource) => {}}
            activeResource={[]}
            index={0}
          />
        </div>
        <div className="rules-display__card">
          <Card
            card={
              new CardRules({
                cardType: "b",
                trash: "a",
                production: ["a", "a", "b"],
                points: 5,
              })
            }
            showTrash={true}
            id="rules1"
            key={"rules1"}
            giveResource={(index: number, resource: Resource) => {}}
            activeResource={[]}
            index={1}
          />
        </div>
        <p>Build: what must be spent to build the card.</p>
        <p>
          Reward: these are one off X, Y or Z resources you get when built that
          can be stored for points or spent to build cards.{" "}
        </p>
        <p>
          T: the resource you get if you trash the object in trash or tressure.{" "}
        </p>
        <p>
          Production: Resources listed here will be added to the tableau's
          production stats and will be produced during the production phase at
          the end of each turn. If you see a number as well as a resource then
          the production is multiplied by the number of cards you have built of
          that colour. A cards colour is its background colour.{" "}
        </p>
        <p>
          VP: This is the number of VP you get for building this card. If you
          see a resource as well as a number then the vp is multiplied by the
          number of cards you have built of that colour at the end of the game.
          A cards colour is its background colour. You also can score point for
          stored X, Y or Z resources which start at 1 point each.{" "}
        </p>
        <h3>Repeat:</h3>
        <p>
          After the first trash and treasure phase ends you repeat the draw and
          trash and treasure phase a second time before the production phase.
        </p>
        <h3>Production phase:</h3>
        <p>
          one resource at a time, starting with A, you get spendable resources
          of that type from your tableau. If cards are built and produce a
          resource after the current production phase you will get those
          resources in the appropriate.{" "}
        </p>
        <p>
          E.g. if you only produce an A resource and spend that to complete
          building a card that produces a B they will then get a B before the
          production phase ends. If you make more than 5 A, C or D resources you
          get a free Y resource. If you produce more than 5 B or E you get a X
          At the end of production either a new turn starts or the game ends and
          you get your score.
        </p>
        <p>
          Your goal is to get 60VP for bronze, 80VP for silver and 100VP for
          Gold
        </p>
      </div>
    </div>
  );
};

export default RulesDisplay;
