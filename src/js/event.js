function checkExam(array1, array2) {
  let scores = 0;

  array1.forEach((answers, index) => {
    if (answers !== array2[index] && array2[index] !== '') scores -= 1;
    if (answers === array2[index]) scores += 4;
  });

  return scores >= 0 ? scores : 0;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])); // 6
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])); // 7
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])); // 16
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])); // 0
