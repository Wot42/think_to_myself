import { CardRules } from "./cardRules";
import { BasicResource } from "./typesAndInterfaces";

export class TableauRules {
  score = 0;
  cards = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  production = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  };
  productionMultiple = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  };
  resourceScore = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    x: 1,
    y: 1,
    z: 1,
  };

  completeCard(card: CardRules) {
    this.cards[card.cardType]++;
    card.reward.forEach((value) => {
      this.cards[value]++;
    });
    card.production.forEach((value) => {
      this.production[value]++;
    });
    if (card.pointResource.length > 0) {
      this.resourceScore[card.pointResource[0]] += card.points;
    } else {
      this.score += card.points;
    }
  }

  subScore(): number[] {
    const aPoints = this.cards["a"] * this.resourceScore["a"];
    const bPoints = this.cards["b"] * this.resourceScore["b"];
    const cPoints = this.cards["c"] * this.resourceScore["c"];
    const dPoints = this.cards["d"] * this.resourceScore["d"];
    const ePoints = this.cards["e"] * this.resourceScore["e"];
    const xPoints = this.cards["x"] * this.resourceScore["x"];
    const yPoints = this.cards["y"] * this.resourceScore["y"];
    const zPoints = this.cards["z"] * this.resourceScore["z"];

    return [
      aPoints,
      bPoints,
      cPoints,
      dPoints,
      ePoints,
      xPoints,
      yPoints,
      zPoints,
    ];
  }

  scoreAddition(): number {
    var add = 0;
    add += this.cards["a"] * this.resourceScore["a"];
    add += this.cards["b"] * this.resourceScore["b"];
    add += this.cards["c"] * this.resourceScore["c"];
    add += this.cards["d"] * this.resourceScore["d"];
    add += this.cards["e"] * this.resourceScore["e"];
    add += this.cards["x"] * this.resourceScore["x"];
    add += this.cards["y"] * this.resourceScore["y"];
    add += this.cards["z"] * this.resourceScore["z"];
    return add;
  }

  finalScore(): number {
    const subScore = this.subScore();
    var finalScore = this.score;
    subScore.forEach((value) => {
      finalScore += value;
    });
    return finalScore;
  }

  produce(resource: BasicResource): number {
    return (
      this.production[resource] +
      this.cards[resource] * this.productionMultiple[resource]
    );
  }
}
