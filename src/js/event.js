function shuffleIt(arr, ...index) {
  for ([ind1, ind2] of index) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  }

  return arr;
}

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2])); // [1,3,2,4,5]);
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])); // [1,3,2,5,4]);
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])); // [1,3,5,2,4]);
