export class CardRules {

  constructor(props:{}){
    this.loaded:true;
    this.cost = props.cost? this.convertArrayToResorce(props.cost) : ['a'];
    this.cardtype=props.cardType? this.convertToResorce(props.cardType) :'a';
    this.trash=props.trash? this.convertToResorce(props.trash) :'a',
    this.reward=props.reward? this.convertArrayToResorce(props.reward) : [],
    this.production= props.production? this.convertArrayToResorce(props.production) : ['a'];
    this.points= props.points? props.points: 0;
    this.pointResorce= props.pointResorce? this.convertArrayToResorce(props.pointResorce) : [];
    this.active = props.cost[0]? true :false;
  }

  // convertToResorce
  // convertArrayToResirce
  //copy(card)
  //hasResorce('a')
  //giveResorce('a')
}
