function countWords(str) {
  return str.split(/\S+/).length - 1;
}

console.log(countWords('Hello'), 1);
console.log(countWords('Hello, World!'), 2);
console.log(
  countWords(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ),
  19
);
console.log(countWords(''), 0);
console.log(countWords('With! Symbol@ #Around! (Every) %Word$'), 5);
console.log(countWords('Dear   Victoria, I love  to press   space button.'), 8);
console.log(countWords(' Arthur '), 1);
console.log(countWords(' David'), 1);
console.log(countWords('Nelson '), 1);
console.log(countWords('  Hello Gomer  '), 2);
console.log(countWords('  Hello     Bart  '), 2);
console.log(countWords('﻿Hello﻿World '), 2);
console.log(countWords('Hello﻿World'), 2);
