function removeRotten(bagOfFruits) {
  return bagOfFruits
    ? bagOfFruits.map(fruit => fruit.replace(/rotten/, '').toLowerCase())
    : [];
}

console.log(removeRotten(['apple', 'rottenBanana', 'apple']));
// ["apple","banana","apple"]
console.log(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange']));
// ['apple', 'banana', 'kiwi', 'melone', 'orange']
console.log(removeRotten([])); // []
console.log(removeRotten(null)); // []
