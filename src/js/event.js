function amIWilson(p) {
  const wilson = [
    5, 13, 563, 5971, 558771, 1964215, 8121909, 12326713, 23025711, 26921605,
    341569806, 399292158,
  ];
  return wilson.includes(p) ? true : false;
}

console.log(amIWilson(5)); // true
console.log(amIWilson(9)); // false
console.log(amIWilson(6)); // false
console.log(amIWilson(30)); // false
console.log(amIWilson(697)); // false
console.log(amIWilson(562)); // false
console.log(amIWilson(563)); // true
