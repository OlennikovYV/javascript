function toUnderscore(string) {
  return String(string)
    .split('')
    .map((char, index) => {
      if (/[a-z]/i.test(char)) {
        if (index === 0) return char.toLowerCase();
        if (char.toUpperCase() === char) return '_' + char.toLowerCase();
      }

      return char;
    })
    .join('');
}

console.log(toUnderscore('TestController')); // "test_controller"
console.log(toUnderscore('MoviesAndBooks')); // "movies_and_books"
console.log(toUnderscore('App7Test')); // "app7_test"
console.log(toUnderscore(1)); // "1"
