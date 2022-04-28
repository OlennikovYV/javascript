var findAverage = function(nums) {
    return nums.reduce((acc, el) => acc + el, 0) / nums.length;
}

console.log(findAverage([1])); //  1
console.log(findAverage([1, 3, 5, 7])); //  4