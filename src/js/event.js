function defineSuit(card) {
  const suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  };

  return suits[card.slice(-1)];
}

console.log(defineSuit('Q♠')); //'spades'
console.log(defineSuit('9♦')); //'diamonds'
console.log(defineSuit('J♥')); //'hearts'
console.log(defineSuit('10♥')); //'hearts'
