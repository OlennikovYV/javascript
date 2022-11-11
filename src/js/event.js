function swapValues(arr) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}

const arr = [1, 2];

swapValues(arr);

console.log(arr[0]); // 2
console.log(arr[1]); // 1
