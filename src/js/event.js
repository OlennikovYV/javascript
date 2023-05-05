function archersReady(archers) {
  return archers.every(archer => archer >= 5) && archers.length !== 0;
}

console.log(archersReady([])); // false
console.log(archersReady([1, 2, 3, 4])); // false
console.log(archersReady([5, 6, 7, 8])); // true
console.log(archersReady([1, 2, 3, 4, 5, 6, 7, 8])); // false
