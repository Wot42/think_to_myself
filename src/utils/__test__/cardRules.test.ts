import { CardRules } from "../cardRules";

describe('card rules test', ()=>{

  it('bad input fails load', ()=> {
    const badLoad = new CardRules({cost:['A']});
    expect(badLoad.loaded).toBe(false)
  });

  const fullResources = ["a","b","c","d","e","x","y","z"];
  const card1 = new CardRules({
    cost:fullResources,
    cardType:'b',
    trash:'b',
    reward:['x'],
    production:['b'],
    points:1,
    pointResource:['b']
  });

  it('good input pass load', ()=> expect(card1.loaded).toBe(true));

  const cardBlank = new CardRules({})
  const cardBlankTemplate = new CardRules({
    cost:['a'],
    cardType:'a',
    trash:'a',
    reward:[],
    production:['a'],
    points:0,
    pointResource:[]
  });
  cardBlankTemplate.active = false;
  it('defaults load', ()=> expect(cardBlank).toEqual(cardBlankTemplate));

  cardBlank.copy(card1);

  it('copy works', ()=> expect(cardBlank).toEqual(card1));

  const cardResource = new CardRules({});
  it('has resource', ()=> expect(cardResource).hasResource('a').toBe(true));

  cardResource.giveResource('a');
  it('took resource', ()=> expect(cardResource.cost).toBe([]));
  it("doesn't have resource", ()=>expect(cardResource.hasResource('a')).toBe(false));

  //string to type
});
