function exchangeWith(a, b) {
  const tempA = [...a];

  a.splice(0, a.length, ...b.reverse());
  b.splice(0, b.length, ...tempA.reverse());
}

const a = ['1', '2', '3', '4', '5', '6', '7'];
const b = ['a', 'b', 'c'];

exchangeWith(a, b);

console.log(a); // ['c', 'b', 'a']
console.log(b); // ['7', '6', '5', '4', '3', '2', '1']
