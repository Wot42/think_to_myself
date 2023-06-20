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
  productionLinkedResource: BasicResource[];
  points: number;
  pointResource: BasicResource[];

  constructor(props: CardRulesProps) {
    this.cost = props.cost ? [...props.cost] : ["a"];
    this.cardType = props.cardType ? props.cardType : "a";
    this.trash = props.trash ? props.trash : "a";
    this.reward = props.reward ? [...props.reward] : [];
    this.production = props.production ? [...props.production] : [];
    this.productionLinkedResource = props.productionLinkedResource
      ? [...props.productionLinkedResource]
      : [];
    this.points = props.points ? props.points : 0;
    this.pointResource = props.pointResource ? [...props.pointResource] : [];
  }

  copy(card: CardRules): void {
    this.cost = [...card.cost];
    this.cardType = card.cardType;
    this.trash = card.trash;
    this.reward = [...card.reward];
    this.production = [...card.production];
    this.productionLinkedResource = [...card.productionLinkedResource];
    this.points = card.points;
    this.pointResource = [...card.pointResource];
  }

  hasResource(resource: Resource): boolean {
    if (resource === "z") {
      return true;
    } else {
      const location = this.cost.findIndex((x) => x === resource);
      return location > -1;
    }
  }

  giveResource(resource: Resource): void {
    if (resource === "z") {
      this.cost.splice(0, 1);
    } else {
      const location = this.cost.findIndex((x) => x === resource);
      if (location > -1) {
        this.cost.splice(location, 1);
      }
    }
  }
}
