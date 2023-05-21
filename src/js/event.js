function addUsername(list) {
  const currentYear = new Date().getFullYear();

  return list.map(el => {
    el.username =
      (el.firstName + el.lastName[0]).toLowerCase() + (currentYear - el.age);
    return el;
  });
}

const source = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];

console.log(addUsername(source));
// [ {
//     firstName: 'Emily',
//     lastName: 'N.',
//     country: 'Ireland',
//     continent: 'Europe',
//     age: 30,
//     language: 'Ruby',
//     username: 'emilyn1990',
//   },
//   {
//     firstName: 'Nor',
//     lastName: 'E.',
//     country: 'Malaysia',
//     continent: 'Asia',
//     age: 20,
//     language: 'Clojure',
//     username: 'nore2000',
//   },
// ];
