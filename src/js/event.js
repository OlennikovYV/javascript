const a = {
  [Symbol.toPrimitive]: () => false,
};

console.log(a == false); // true
console.log(!a == false); // true
console.log(a == !a); // true
