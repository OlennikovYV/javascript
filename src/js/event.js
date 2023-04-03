function getNiceNames(people) {
  return people.filter(p => p.wasNice).map(p => p.name);
}

function getNaughtyNames(people) {
  return people.filter(p => !p.wasNice).map(p => p.name);
}

let naughty = [{ name: 'xDranik', wasNice: false }];
let nice = [
  { name: 'Santa', wasNice: true },
  { name: 'Warrior reading this kata', wasNice: true },
];

console.log(getNiceNames(naughty)); // []
console.log(getNaughtyNames(nice)); // []

console.log(getNiceNames(nice.concat(naughty)));
// [ { name: 'Santa', wasNice: true },
//   { name: 'Warrior reading this kata', wasNice: true } ]
console.log(getNaughtyNames(nice.concat(naughty)));
// [{ name: 'xDranik', wasNice: false }]
