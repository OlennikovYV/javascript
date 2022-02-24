var summation = function sum(num) {
    return (num > 0) ? num + sum(num - 1) : 0;
};

console.log(summation(1)); // 1
console.log(summation(8)); // 36
console.log(summation(11)); // 66
console.log(summation(53)); // 1431