const flip =
  fn =>
  (...arg) =>
    fn(...arg.reverse());

function print(a, b) {
  return a + ' -> ' + b;
}

console.log(flip(print)(4, 5)); // '5 -> 4'
