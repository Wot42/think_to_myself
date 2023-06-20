import React from "react";
import { CardRules } from "../utils";
import { Resource } from "../utils/typesAndInterfaces";
import ResourceBox from "./ResourceBox";
import "./css/Card.css";

interface props {
  card: CardRules;
  showTrash: boolean;
  id: string;
  activeResource: Resource[];
  index: number;
  giveResource: (index: number, resource: Resource) => void;
}

const Card = ({
  card,
  showTrash,
  id,
  giveResource,
  activeResource = [],
  index = -1,
}: props) => {
  var rowCount = showTrash || card.reward.length > 0 ? 3 : 2;

  const addResourceFromArray = (array: Resource[], idTag: string) => {
    var output: JSX.Element[] = [];
    for (var i = 0; i < array.length; i++) {
      output.push(
        <ResourceBox
          resource={array[i]}
          key={id + idTag + i}
          id={id + idTag + i}
        />
      );
    }

    return <React.Fragment>{output}</React.Fragment>;
  };

  const isClickable = () => {
    if (!showTrash && activeResource.length > 0) {
      if (card.hasResource(activeResource[0])) {
        return true;
      }
    }
    return false;
  };

  const activeClicked = () => {
    if (isClickable()) {
      giveResource(index, activeResource[0]);
    }
  };

  const middleRow3 = () => {
    var trash = <React.Fragment></React.Fragment>;
    if (showTrash) {
      trash = (
        <div className={`card__scrap color__${card.trash}${shaded()}`}>
          T<ResourceBox resource={card.trash} id={id + "trash"} />
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="card__txt-box card__shadow">Reward:</div>
        <div className="card__shadow card__resource-row">
          <div className="card__reward">
            {addResourceFromArray(card.reward, "reward")}
          </div>
          {trash}
        </div>
      </React.Fragment>
    );
  };

  const middleRow2 = () => {
    return <div className="card__txt-box card__shadow"></div>;
  };

  const showScore = () => {
    var result = <React.Fragment></React.Fragment>;

    if (card.pointResource.length > 0) {
      result = (
        <div className={`card__score color__points${shaded()}`}>
          {card.points}VP x{" "}
          <ResourceBox resource={card.pointResource[0]} id={id + "point"} />
        </div>
      );
    } else if (card.points > 0) {
      result = (
        <div className={`card__score color__points${shaded()}`}>
          {card.points}VP
        </div>
      );
    }

    return <React.Fragment>{result}</React.Fragment>;
  };
  const showProduction = () => {
    if (card.productionLinkedResource.length > 0) {
      return (
        <React.Fragment>
          {addResourceFromArray(card.production, "production")} x{" "}
          {addResourceFromArray(card.productionLinkedResource, "production")}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {addResourceFromArray(card.production, "production")}
        </React.Fragment>
      );
    }
  };

  const shaded = () => {
    if (activeResource.length > 0 && !card.hasResource(activeResource[0])) {
      return "--shaded";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`card__container--${rowCount}rows ${
        isClickable() ? "app__hover" : "app__default-cursor"
      }`}
      onClick={() => activeClicked()}
    >
      <div className={`card__main-style color__${card.cardType}${shaded()}`}>
        <div className=".card__inset">
          <div className="card__txt-box">Build:</div>
          <div className="card__resource-row">
            {addResourceFromArray(card.cost, "cost")}
          </div>
          {rowCount === 3 ? middleRow3() : middleRow2()}
          <div className="card__txt-box">Produce:</div>
          <div className="card__resource-row">
            <div className="card__production">{showProduction()}</div>
            {showScore()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
