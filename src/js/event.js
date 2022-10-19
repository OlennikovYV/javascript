function first(arr, n) {
  const count = n == undefined ? 1 : n;

  return arr.slice(0, count);
}

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(first(arr)); // ['a']);
console.log(first(arr, 2)); // ['a', 'b']);
