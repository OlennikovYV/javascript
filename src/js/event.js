function doubleEveryOther(a) {
  return a.map((el, i) => el * (1 + (i % 2)));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
