var orderedCount = function (text) {
  let result = [];
  let countAlpha = {};
  let textArray = text.split('');
  let textSet = new Set(textArray);

  textArray.reduce((acc, el) => {
    if (countAlpha[el]) {
      countAlpha[el] += 1;
    } else countAlpha[el] = 1;
    return countAlpha;
  }, countAlpha);

  for (let key of textSet) {
    result.push([key, countAlpha[key]]);
  }

  return result;
};

console.log(orderedCount('abracadabra')); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
console.log(orderedCount('Code Wars')); //  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]]
console.log(orderedCount('233312')); // [['2', 2], ['3', 3], ['1', 1 ]]]
