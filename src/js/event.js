const nok = (...arr) => {
  const nod = (x, y) => (!y ? x : nod(y, x % y));
  const _nok = (x, y) => (x * y) / nod(x, y);
  return [...arr].reduce((a, b) => _nok(a, b));
};

function convertFrac(lst) {
  if (lst.length === 0) return '';

  const zn = lst.map(el => el[1]);
  const nokAll = nok(...zn);

  return lst.reduce((str, el) => {
    str += `(${(el[0] * nokAll) / el[1]},${nokAll})`;
    return str;
  }, '');
}

let lst = [
  [1, 2],
  [1, 3],
  [1, 4],
];

console.log(convertFrac(lst)); // '(6,12)(4,12)(3,12)'
lst = [
  [69, 130],
  [87, 1310],
  [3, 4],
];
console.log(convertFrac(lst)); // '(18078,34060)(2262,34060)(25545,34060)'
