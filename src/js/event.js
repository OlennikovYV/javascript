function spacey(array) {
  let nextString = '';

  return array.map(el => (nextString += el));
}

console.log(spacey(['kevin', 'has', 'no', 'space']));
// [
//   'kevin',
//   'kevinhas',
//   'kevinhasno',
//   'kevinhasnospace',
// ]
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));
// [
//   'this',
//   'thischeese',
//   'thischeesehas',
//   'thischeesehasno',
//   'thischeesehasnoholes',
// ]
