function hydrate(s) {
  let sumGlass = s
    .match(/[\d+]/g)
    .reduce((sum, drink) => sum + Number(drink), 0);
  return sumGlass > 1
    ? `${sumGlass} glasses of water`
    : `${sumGlass} glass of water`;
}

console.log(hydrate('1 beer')); // '1 glass of water');
console.log(hydrate('2 glasses of wine and 1 shot'));
// '3 glasses of water'
console.log(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'));
// '10 glasses of water'
