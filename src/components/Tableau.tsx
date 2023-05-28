import React from "react";
import "./Tableau.css";
import ResourceBox from "./ResourceBox";
import { Resource } from "../utils/typesAndInterfaces";
import { TableauRules } from "../utils";
import { BasicResource } from "../utils/typesAndInterfaces";

interface props {
  tableau: TableauRules;
}

const Tableau = ({ tableau }: props) => {
  const productionSection = (res: BasicResource) => {
    return (
      <div className={`tableau__section color__${res}`}>
        {tableau.production[res]}+{tableau.productionMultiple[res]}x{" "}
        <ResourceBox resource={res} key={"tableau" + res} />
        {/* {tableau.production[res]} X <ResourceBox resource={res} /> */}
      </div>
    );
  };

  const scoreSection = (res: Resource) => {
    return (
      <div className={`tableau__section color__${res}`}>
        {tableau.cards[res]}x{tableau.resourceScore[res]}VP
      </div>
    );
  };

  const scoreTotal = () => {
    return (
      <div className="tableau__section color__points">
        {tableau.score} + {tableau.scoreAddition()}
      </div>
    );
  };

  const miniCardContainer = (res: BasicResource) => {
    var cards: JSX.Element[] = [];
    for (var i = 0; i < tableau.cards[res]; i++) {
      cards.push(<div className={`tableau__mini-card color__${res}`}></div>);
    }
    return <div className={"tableau__mini-cards--section"}>{cards}</div>;
  };

  return (
    <div className="tableau">
      <div className="tableau__mini-cards--row">
        {miniCardContainer("a")}
        {miniCardContainer("b")}
        {miniCardContainer("c")}
        {miniCardContainer("d")}
        {miniCardContainer("e")}
      </div>
      <div className="tableau__row">
        {productionSection("a")}
        {productionSection("b")}
        {productionSection("c")}
        {productionSection("d")}
        {productionSection("e")}
      </div>
      <div className="tableau__txt-box color__points">score multipliers:</div>

      <div className="tableau__row">
        {scoreSection("a")}
        {scoreSection("b")}
        {scoreSection("c")}
        {scoreSection("d")}
        {scoreSection("e")}
      </div>
      <div className="tableau__row">
        {scoreTotal()}
        {scoreSection("x")}
        {scoreSection("y")}
        {scoreSection("z")}
      </div>
    </div>
  );
};

export default Tableau;
