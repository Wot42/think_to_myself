import { CardRules } from "./cardRules";

export class TableauRules {
  score = 0;
  cards = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  };
  production = {
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
  };
  specialResources = {
    x: 0,
    y: 0,
    z: 0,
  };

  completeCard(card: CardRules) {
    this.cards[card.cardType]++;
    card.reward.forEach((value) => {
      this.specialResources[value]++;
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
    return [
      aPoints,
      bPoints,
      cPoints,
      dPoints,
      ePoints,
      this.specialResources["x"],
      this.specialResources["y"],
      this.specialResources["z"],
    ];
  }

  finalScore(): number {
    const subScore = this.subScore();
    var finalScore = this.score;
    subScore.forEach((value) => {
      finalScore += value;
    });
    return finalScore;
  }
}
