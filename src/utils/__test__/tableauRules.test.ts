import { CardRules } from "../cardRules";
import { TableauRules } from "../tableauRules";

describe('Tableau rules test', ()=>{

  const tab1 = new TableauRules([])
  const tab2 = new TableauRules([])
  const card1 = new CardRules({
    cost:[],
    cardtype:'b',
    trash:'b',
    reward:['x'],
    production:['b'],
    points:1,
    pointResorce:['b'];
  });

  tab2.bCards=1;
  tab2.xResource=1;
  tab2.bProduction=1;
  tab2.score=1;
  tab2.bScore=1;

  tab1.compleetCard(card1);

  it('complete card works', ()=>expect(tab1).toEqual(tab2));

  it('sub score works', ()=>expect(tab1.subScore).toBe([1,0,1,0,0,0,1,0]));

  it('final score works', ()=>expect(tab1.finalScore).toBe(3));

})
