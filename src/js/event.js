function swapValues(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

const arr = [1, 2];

swapValues(arr);

console.log(arr[0]); // 2
console.log(arr[1]); // 1
