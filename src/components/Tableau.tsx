import React from "react";
import "./css/Tableau.css";
import ResourceBox from "./ResourceBox";
import { Resource, BasicResource } from "../utils/typesAndInterfaces";
import { TableauRules } from "../utils";

interface props {
  tableau: TableauRules;
  makeActive: (resource: Resource) => void;
  setTableau: React.Dispatch<React.SetStateAction<TableauRules>>;
}

const Tableau = ({ tableau, makeActive, setTableau }: props) => {
  const productionSection = (res: BasicResource) => {
    var multiple: JSX.Element[] = [];
    if (tableau.productionMultiple[res].length > 0) {
      multiple.push(<React.Fragment>+</React.Fragment>);
      tableau.productionMultiple[res].forEach((resource, index) => {
        multiple.push(
          <ResourceBox
            resource={resource}
            key={"tableau" + res + index}
            id={"tableau" + res + index}
          />
        );
      });
    }
    return (
      <div className={`tableau__section color__${res} app__default-cursor`}>
        {tableau.production[res]}
        {[...multiple]}
      </div>
    );
  };

  const scoreSection = (res: Resource) => {
    return (
      <div
        className={`tableau__section color__${res} ${
          res === "x" || res === "y" || res === "z"
            ? "app__hover"
            : "app__default-cursor"
        }`}
        onClick={() => {
          activateResource(res);
        }}
      >
        {tableau.cards[res]}x{tableau.resourceScore[res]}VP
      </div>
    );
  };

  const activateResource = (resource: Resource) => {
    if (
      tableau.cards[resource] > 0 &&
      (resource === "x" || resource === "y" || resource === "z")
    ) {
      makeActive(resource);
      const tab = tableau.copy();
      tab.cards[resource]--;
      setTableau(tab);
    }
  };

  const scoreTotal = () => {
    return (
      <div className="tableau__section color__points app__default-cursor">
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
      <div className="tableau__txt-box color__points app__default-cursor">
        score multipliers:
      </div>

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
