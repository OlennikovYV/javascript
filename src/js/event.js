function swapValues() {
  arguments[0].reverse();
}

const arr = [1, 2];

swapValues(arr);

console.log(arr[0]); // 2
console.log(arr[1]); // 1
