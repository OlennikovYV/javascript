function add(...params) {
  return params.reduce((sum, el, i) => sum + el * (i + 1), 0);
}

console.log(add(100, 200, 300)); // 1400
