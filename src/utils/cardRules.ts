import { CardRulesProps, Resource } from "./typesAndInterfaces";

export class CardRules {
  cost: Resource[];
  cardType: Resource;
  trash: Resource;
  reward: Resource[];
  production: Resource[];
  points: number;
  pointResource: Resource[];
  active: boolean;

  constructor(props: CardRulesProps) {
    this.cost = props.cost ? props.cost : ["a"];
    this.cardType = props.cardType ? props.cardType : "a";
    this.trash = props.trash ? props.trash : "a";
    this.reward = props.reward ? props.reward : [];
    this.production = props.production ? props.production : ["a"];
    this.points = props.points ? props.points : 0;
    this.pointResource = props.pointResource ? props.pointResource : [];
    this.active = props.cost && props.cost.length ? true : false;
  }

  copy(card: CardRules): void {
    this.cost = card.cost;
    this.cardType = card.cardType;
    this.trash = card.trash;
    this.reward = card.reward;
    this.production = card.production;
    this.points = card.points;
    this.pointResource = card.pointResource;
    this.active = card.active;
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
