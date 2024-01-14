function nameFile(fmt, nbr, start) {
  const result = [];

  if (
    nbr <= 0 ||
    Number.isInteger(nbr) === false ||
    Number.isInteger(start) === false
  )
    return [];

  for (let i = start; i < start + nbr; i++) {
    result.push(fmt.replaceAll(/<index_no>/g, i));
  }

  return result;
}

console.log(nameFile('IMG <index_no>', 4, 1));
// [
//   'IMG 1',
//   'IMG 2',
//   'IMG 3',
//   'IMG 4',
// ]
console.log(nameFile('image #<index_no>.jpg', 3, 7));
// [
//   'image #7.jpg',
//   'image #8.jpg',
//   'image #9.jpg',
// ]
console.log(nameFile('#<index_no> #<index_no>', 3, -2));
// [
//   '#-2 #-2',
//   '#-1 #-1',
//   '#0 #0',
// ]
console.log(nameFile('<file> number <index_no>', 5, 0));
// [
//   '<file> number 0',
//   '<file> number 1',
//   '<file> number 2',
//   '<file> number 3',
//   '<file> number 4',
// ]
console.log(nameFile('<file_no> number <index_no>', 2, -1));
// [
//   '<file_no> number -1',
//   '<file_no> number 0',
// ]
console.log(nameFile('file', 2, 3)); // ['file', 'file']
console.log(nameFile('<file_no> number <index_no>', -1, 0)); // []
console.log(nameFile('file <index_no>', 2, 0.1)); // []
console.log(nameFile('file <index_no>', 0.2, 0)); // []
console.log(nameFile('file <index_no>', 0, 0)); // []
