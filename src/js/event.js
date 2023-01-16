function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}

console.log(solution('abcdeb', 'b')); // 2
console.log(solution('abc', 'b')); // 1
console.log(solution('abbc', 'bb')); // 1
