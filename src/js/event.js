const correctTail = (body, tail) => body.slice(-1) === tail;

console.log(correctTail('Fox', 'x')); // true
console.log(correctTail('Rhino', 'o')); // true
console.log(correctTail('Meerkat', 't')); // true
console.log(correctTail('Wolf', 'W')); // false
