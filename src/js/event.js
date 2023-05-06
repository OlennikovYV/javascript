function compose(f, g) {
  return function (...arg) {
    return f(g(...arg));
  };
}

const add1 = function (a) {
  return a + 1;
};
const id = function (a) {
  return a;
};
const addAll3 = function (a, b, c) {
  return a + b + c;
};

console.log(compose(add1, id)(0)); // 1
console.log(compose(add1, addAll3)(1, 2, 3)); // 7
