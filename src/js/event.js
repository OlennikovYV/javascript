function makeLooper(str) {
  let currentIndex = 0;

  return function () {
    return str[currentIndex++ % str.length];
  };
}

const abc = makeLooper('abc');

console.log(abc()); // 'a'
console.log(abc()); // 'b'
console.log(abc()); // 'c'
console.log(abc()); // 'a'
console.log(abc()); // 'b'
console.log(abc()); // 'c'
