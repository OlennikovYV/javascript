function swapValues() {
  let temp = arguments[0][0];
  arguments[0][0] = arguments[0][1];
  arguments[0][1] = temp;
}

const arr = [1, 2];

swapValues(arr);

console.log(arr[0]); // 2
console.log(arr[1]); // 1
