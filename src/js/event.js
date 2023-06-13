const a = {};
a.valueOf = function () {
  return false;
};

console.log(a == false); // true
console.log(!a == false); // true
console.log(a == !a); // true
