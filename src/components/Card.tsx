import React from "react";
import { CardRules } from "../utils";
import { Resource } from "../utils/typesAndInterfaces";
import ResourceBox from "./ResourceBox";
import "./Card.css";

interface props {
  card: CardRules;
  showTrash: boolean;
  id: string;
}

const Card = ({ card, showTrash, id }: props) => {
  var rowCount = showTrash || card.reward.length > 0 ? 3 : 2;

  const addResourceFromArray = (array: Resource[], idTag: string) => {
    var output: JSX.Element[] = [];
    for (var i = 0; i < array.length; i++) {
      output.push(<ResourceBox resource={array[i]} key={id + idTag + i} />);
    }

    return <React.Fragment>{output}</React.Fragment>;
  };

  const middleRow3 = () => {
    var trash = <React.Fragment></React.Fragment>;
    if (showTrash) {
      trash = (
        <div className={`card__scrap color__${card.trash}`}>
          T<ResourceBox resource={card.trash} />
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
        <div className="card__score color__points">
          {card.points}VP X <ResourceBox resource={card.pointResource[0]} />
        </div>
      );
    } else if (card.points > 0) {
      result = <div className="card__score color__points">{card.points}VP</div>;
    }

    return <React.Fragment>{result}</React.Fragment>;
  };

  return (
    <div className={`card__container--${rowCount}rows`}>
      <div className={`card__main-style color__${card.cardType}`}>
        <div className=".card__inset">
          <div className="card__txt-box">Build:</div>
          <div className="card__resource-row">
            {addResourceFromArray(card.cost, "cost")}
          </div>
          {rowCount === 3 ? middleRow3() : middleRow2()}
          <div className="card__txt-box">Produce:</div>
          <div className="card__resource-row">
            <div className="card__production">
              {addResourceFromArray(card.production, "production")}
            </div>
            {showScore()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
