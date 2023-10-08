function makeLooper(str) {
  let currentIndex = 0;
  let stringLooper = str;

  return function () {
    const currentChar = stringLooper[currentIndex];

    currentIndex =
      currentIndex === stringLooper.length - 1 ? 0 : currentIndex + 1;

    return currentChar;
  };
}

const abc = makeLooper('abc');

console.log(abc()); // 'a'
console.log(abc()); // 'b'
console.log(abc()); // 'c'
console.log(abc()); // 'a'
console.log(abc()); // 'b'
console.log(abc()); // 'c'
