function multi(arr) {
  return arr.reduce((mul, num) => mul * num);
}

function add(arr) {
  return arr.reduce((mul, num) => mul + num);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(multi([5, 1, 5])); // 25
console.log(add([9, 8, 5])); // 22
console.log(reverse('abcdefghijklmnop')); // ponmlkjihgfedcba
