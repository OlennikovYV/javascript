function add(x) {
  return x + 10;
}

function mult(x) {
  return x * 30;
}

function chain(input, fs) {
  return fs.reduce((result, fn) => fn(result), input);
}

console.log(chain(2, [add, mult])); // 360
