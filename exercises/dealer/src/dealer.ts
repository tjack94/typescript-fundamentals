/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
export enum Suit{
  Clubs, Diamonds, Hearts, Spades
}
export enum CardNumber{
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}
type Card =[Suit, CardNumber ]
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
function createDeck(): Card[]{
  let cards: Card[]= []
for(let s= 0; s< Object.keys(Suit).length; s+= 2){
  for (let n = 0; n < Object.keys(CardNumber).length; n+= 2) {
   cards.push([s/2, n/2])
  }
}
return cards
}
export class Dealer {
  cards: Card[]=[]
  constructor(){
    this.cards = createDeck()
    shuffleArray(this.cards)
  }
dealHand(numCards: number): Card[]{
  if(numCards > this.getLength()) throw new Error("Not Enough Cards") 
  if(numCards < 0 ) throw new Error("Please give me YOUR Cards") 
return this.cards.splice(this.getLength() -numCards, numCards)
}
getLength(): number{
return this.cards.length
}
readCard(card: Card): string{
  let [suit, cardNumber] =card;
return `${CardNumber[cardNumber]} of ${Suit[suit]}`
}
}
