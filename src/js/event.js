function positiveSum(arr) {
    return arr.reduce((acc, el) => acc + (el > 0 ? el : 0), 0);
}

console.log(positiveSum([1, 2, 3, 4, 5])); //15
console.log(positiveSum([1, -2, 3, 4, 5])); //13
console.log(positiveSum([])); //0
console.log(positiveSum([-1, -2, -3, -4, -5])); //0
console.log(positiveSum([-1, 2, 3, 4, -5])); //9