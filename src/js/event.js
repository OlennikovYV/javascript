function getLargerNumbers(a, b) {
  return a.map((el, i) => Math.max(el, b[i]));
}

let a = [13, 64, 15, 17, 88];
let b = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(a, b));
// [23, 64, 53, 17, 88]
a = [34, -64, 15, 17, 88];
b = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(a, b));
// [34, 14, 53, 17, 88]
