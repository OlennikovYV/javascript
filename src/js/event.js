function partitionOn(pred, items) {
  let matchItems = [];
  let mismatchItems = [];

  mismatchItems = items.filter(el => !pred(el));
  matchItems = items.filter(pred);

  items.splice(0, items.length, ...mismatchItems, ...matchItems);

  return mismatchItems.length;
}

const items = [1, 3, 2, 4, 5, 6];

function isEven(n) {
  return n % 2 == 0;
}

const i = partitionOn(isEven, items);

console.log(i); // 3
console.log(items.slice(0, i)); // [1, 3, 5]
console.log(items.slice(i)); // [2, 4, 6]
