function myFirstKata(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return false;
  return (a % b) + (b % a);
}

console.log(myFirstKata(3, 5)); // 5
console.log(myFirstKata('hello', 3)); // false
console.log(myFirstKata(67, 'bye')); // false
console.log(myFirstKata(true, true)); // false
console.log(myFirstKata(314, 107)); // 207
console.log(myFirstKata(19483, 9)); // 16
