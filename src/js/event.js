function sortCards(array) {
  const weightCards = {
    A: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    T: 9,
    J: 10,
    Q: 11,
    K: 12,
  };

  return array.sort((a, b) => weightCards[a] - weightCards[b]);
}

console.log(sortCards([3, 9, 'A', 5, 'T', 8, 2, 4, 'Q', 7, 'J', 6, 'K']));
// ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K']
console.log(sortCards(['J', 'J', 2, 'T', 9, 6]));
// [2, 6, 9, 'T', 'J', 'J']
console.log(sortCards(['A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q', 'A']));
// ['A', 'A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q']
