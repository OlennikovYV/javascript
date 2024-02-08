function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    const stringA = a.toUpperCase();
    const stringB = b.toUpperCase();

    if (stringA < stringB) return -1;
    if (stringA > stringB) return 1;

    return 0;
  });
}

console.log(sorter(['Algebra', 'History', 'Geometry', 'English']));
//  [
//   'Algebra',
//   'English',
//   'Geometry',
//   'History',
// ]
console.log(sorter(['Algebra', 'history', 'Geometry', 'english']));
//  [
//   'Algebra',
//   'english',
//   'Geometry',
//   'history',
// ]
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']));
//  [
//   '$istory',
//   '**english',
//   'Alg#bra',
//   'Geom^try',
// ]
