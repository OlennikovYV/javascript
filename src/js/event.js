function toUnderscore(string) {
  return String(string)
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
}

console.log(toUnderscore('TestController')); // "test_controller"
console.log(toUnderscore('MoviesAndBooks')); // "movies_and_books"
console.log(toUnderscore('App7Test')); // "app7_test"
console.log(toUnderscore(1)); // "1"
