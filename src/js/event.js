function swapValues() {
  let args = Array.prototype.slice.call(arguments)[0];
  let temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

const arr = [1, 2];

swapValues(arr);

console.log(arr[0]); // 2
console.log(arr[1]); // 1
