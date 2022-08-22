function multiplyAll(arr) {
  return function (num) {
    return arr.map(el => el * num);
  };
}

console.log(multiplyAll([1, 2, 3])(1)); // [1, 2, 3]
console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 6]
console.log(multiplyAll([1, 2, 3])(0)); // [0, 0, 0]
console.log(multiplyAll([])(10)); // []
