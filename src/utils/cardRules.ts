import {
  BasicResource,
  CardRulesProps,
  Resource,
  SpecialResource,
} from "./typesAndInterfaces";

export class CardRules {
  cost: Resource[];
  cardType: BasicResource;
  trash: Resource;
  reward: SpecialResource[];
  production: BasicResource[];
  points: number;
  pointResource: BasicResource[];

  constructor(props: CardRulesProps) {
    this.cost = props.cost ? props.cost : ["a"];
    this.cardType = props.cardType ? props.cardType : "a";
    this.trash = props.trash ? props.trash : "a";
    this.reward = props.reward ? props.reward : [];
    this.production = props.production ? props.production : ["a"];
    this.points = props.points ? props.points : 0;
    this.pointResource = props.pointResource ? props.pointResource : [];
  }

  copy(card: CardRules): void {
    this.cost = card.cost;
    this.cardType = card.cardType;
    this.trash = card.trash;
    this.reward = card.reward;
    this.production = card.production;
    this.points = card.points;
    this.pointResource = card.pointResource;
  }

  hasResource(resource: Resource): boolean {
    const location = this.cost.findIndex((x) => (x = resource));
    return location > -1;
  }

  giveResource(resource: Resource): void {
    //placeholder
    const location = this.cost.findIndex((x) => (x = resource));
    this.cost.splice(location, 1);
  }
}
