const flatenArray = arr => {
  let resultArray = [];

  arr.map(el =>
    Array.isArray(el)
      ? (resultArray = [...resultArray, ...flatenArray(el)])
      : (resultArray = [...resultArray, el])
  );

  return resultArray;
};

function well(x) {
  const flatArray = flatenArray(x);
  const countGood = flatArray.filter(el => /good/gi.test(el)).length;

  if (countGood < 1) return 'Fail!';
  if (countGood < 3) return 'Publish!';

  return 'I smell a series!';
}

console.log(
  well([
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad'],
  ])
); // 'Fail!'
console.log(
  well([
    ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['GOOD', 'bad', 'bad', 'bAd'],
  ])
); // 'Publish!'
console.log(
  well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])
); // 'I smell a series!'
console.log(
  well([
    ['TEST', 'bAd', 'good', 'bAd', 'BAD'],
    ['bad', 'bAd', 'bAd', 6],
    ['bAd', 'bAd', 'CAPS', '8', 'six', 'BAD'],
  ])
); // Publish!
