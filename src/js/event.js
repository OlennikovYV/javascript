function catMouse(x) {
  return x.length > 5 ? 'Escaped!' : 'Caught!';
}

console.log(catMouse('C....m')); // 'Escaped!'
console.log(catMouse('C..m')); // 'Caught!'
console.log(catMouse('C.....m')); // 'Escaped!'
