function doubleEveryOther(a) {
  return a.map((el, i) => ((i + 1) % 2 === 0 ? el * 2 : el));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
