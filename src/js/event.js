function getNiceNames(people) {
  const result = [];

  for (const p of people) {
    if (p.wasNice) result.push(p.name);
  }

  return result;
}

function getNaughtyNames(people) {
  const result = [];

  for (const p of people) {
    if (!p.wasNice) result.push(p.name);
  }

  return result;
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
