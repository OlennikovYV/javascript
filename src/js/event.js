function catMouse(x) {
  return x.replace(/^C|m$/g, '').length > 3 ? 'Escaped!' : 'Caught!';
}

console.log(catMouse('C....m')); // 'Escaped!'
console.log(catMouse('C..m')); // 'Caught!'
console.log(catMouse('C.....m')); // 'Escaped!'
