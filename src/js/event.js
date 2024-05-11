function makeLazy(fn) {
  return fn.bind.apply(fn, arguments);
}

function add(a, b) {
  return a + b;
}

function double(n) {
  return n * 2;
}

function superAdd(...args) {
  return args.reduce((sum, x) => sum + x, 0);
}

let lazy_value = makeLazy(add, 2, 3);
console.log(lazy_value()); // 5
lazy_value = makeLazy(double, 5);
console.log(lazy_value()); // 10
lazy_value = makeLazy(superAdd, 1, 2, 3, 4, 5);
console.log(lazy_value()); // 15
