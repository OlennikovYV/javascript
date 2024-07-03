function squeakyClean(arr) {
  return arr.filter(Boolean);
}

console.log(squeakyClean([1, 2, 3, -1, 1.1])); // [1, 2, 3, -1, 1.1]
console.log(squeakyClean(['hello', '14'])); // ['hello', '14']
console.log(squeakyClean(['click1', 'click2', null, '', '', 'submitForm']));
// ['click1', 'click2', 'submitForm']
