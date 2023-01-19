sortme = function (names) {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

console.log(sortme(['Hello', 'there', "I'm", 'fine']));
// ['fine', 'Hello', "I'm", 'there']
console.log(sortme(['C', 'd', 'a', 'B']));
// ['a', 'B', 'C', 'd']
console.log(sortme(['CodeWars']));
// ['CodeWars']
console.log(sortme([]));
// []
console.log(
  sortme([
    'Their',
    'into',
    'Public',
    'small',
    'large',
    'Eye',
    'one',
    'seem',
    'with',
    'Of',
    'To',
  ])
);
// ["Eye","into","large","Of","one","Public","seem","small","Their","To","with"]
