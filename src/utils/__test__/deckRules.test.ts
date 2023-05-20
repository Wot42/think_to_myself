import { CardRules } from "../cardRules";
import { DeckRules } from "../deckRules";
import { TableauRules } from "../tableauRules";

describe('Deck rules test', ()=>{
  const deckCreate = new DeckRules();
  deckCreate.create(5);
  it('create works', ()=> expect(deckCreate.cards.length).toBe(5));





  const deck1 = new DeckRules();
  const card1 = new CardRules({
    cost:['b'],
    cardtype:'b',
    trash:'b',
    reward:['x'],
    production:['b'],
    points:1,
    pointResorce:['b'];
  });
  deck1.cards.push(card1);

  it('fill from works', ()=> {
    const deckFill = new DeckRules();
    deckFill.fillFrom(testDeckData);
    expect(deckFill).toEqual(deck1)
  });

  deck1.cards.push(card1);
  deck1.cards[0].active = false;
  deck1.reorderInactive();
  it('reorder puts active first', ()=> expect(deck1.cards[0].active).toBe(true));

  it('reorder has inactive last', ()=> expect(deck1.cards[1].active).toBe(false));
  it('reorder has updated cardCount', ()=> expect(deck1.cardCount).toBe(1));

  deck1.cards[1].active= true;
  deck1.clear(0);

  it('clear has inactive last', ()=> expect(deck1.cards[1].active).toBe(false));

  deckCreate.drawDeck(deck1,0)
  it('draw deck removes card', ()=> expect(deck1.cards[0].active).toBe(false));
  it('draw deck adds card', ()=> expect(deckCreate.cards[0].active).toBe(true));
  it('draw deck keeps length constant', ()=> expect(deckCreate.cards.length).toBe(5));
  // test no space to draw error
  //test draw inactive error

  const deckEmpty = new DeckRules();
  deckEmpty.create(5)
  const deckFill5 = new DeckRules();
  deckFill5.fillFrom(testDeck5Data);
  deckEmpty.drawRand(deckFill5,3)
  it('random draw gave 3', ()=> expect(deckEmpty.cardCount).toBe(3));
  it('random draw took 3', ()=> expect(deckFill5.cardCount).toBe(2));

  const tableau = new TableauRules()
  deckEmpty.tableau = tableau
  deckEmpty.giveCardResource(0,'b')
  it('give card resource cleared card', ()=> expect(deckEmpty.cardCount).toBe(2));
  it('give card resource updated tableau score', ()=> expect(tableau.score).toBe(1));



})
