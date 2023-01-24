function arraySum(arr) {
  return arr.reduce((sum, el) => {
    if (Array.isArray(el)) sum += arraySum(el);
    else if (!isNaN(el)) sum += el;
    return sum;
  }, 0);
}

console.log(arraySum([1, 2])); // 3
console.log(arraySum([1, 2, 3])); // 6
console.log(arraySum([1, 2, [1, 2]])); // 6
