const getNames = data => data.map(item => item.name);

const data = [
  { name: 'Joe', age: 20 },
  { name: 'Bill', age: 30 },
  { name: 'Kate', age: 23 },
];
console.log(getNames(data)); // ['Joe', 'Bill', 'Kate']
