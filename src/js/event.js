function checkExam(array1, array2) {
  return Math.max(
    array2.reduce(
      (sum, val, index) =>
        val ? (val === array1[index] ? sum + 4 : (sum -= 1)) : sum,
      0
    ),
    0
  );
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])); // 6
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])); // 7
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])); // 16
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])); // 0
