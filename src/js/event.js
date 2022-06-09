function addLength(str) {
  return str.split(' ').map(el => `${el} ${el.length}`);
}

console.log(addLength('apple ban')); // ['apple 5', 'ban 3']
console.log(addLength('you will win')); // ['you 3', 'will 4', 'win 3']
