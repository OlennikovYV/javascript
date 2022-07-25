function catMouse(x) {
  return /C.{0,3}m/.test(x) ? 'Caught!' : 'Escaped!';
}

console.log(catMouse('C....m')); // 'Escaped!'
console.log(catMouse('C..m')); // 'Caught!'
console.log(catMouse('C.....m')); // 'Escaped!'
