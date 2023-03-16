function doubleEveryOther(a) {
  return a.map((el, i) => (i % 2 === 0 ? el : el * 2));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
