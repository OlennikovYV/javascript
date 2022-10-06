function getMissingElement(superImportantArray) {
  superImportantArray.sort();

  for (let i = 0; i <= superImportantArray.length; i += 1) {
    if (i != superImportantArray[i]) return i;
  }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3
console.log(getMissingElement([0, 1, 2, 3, 4, 5, 6, 7, 8])); // 9
