function findOddNames(list) {
  const isOdd = str => {
    const sumNumberChar = Array(...str).reduce(
      (sum, char) => sum + char.charCodeAt(0),
      0
    );

    return sumNumberChar % 2 !== 0;
  };

  return list.filter(item => isOdd(item.firstName));
}

var list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

console.log(findOddNames(list1));
// [{
//   firstName: 'Abb',
//   lastName: 'O.',
//   country: 'Israel',
//   continent: 'Asia',
//   age: 39,
//   language: 'Java',
// }]

var list2 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
];

console.log(findOddNames(list2));
// []
