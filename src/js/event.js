function findUniq(arr) {
    return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log(findUniq([0.55, 0, 0])); //  0.55
console.log(findUniq([1, 0, 0])); //  1
console.log(findUniq([0, 1, 0])); //  1
console.log(findUniq([0, 0, 1])); //  1
console.log(findUniq([1, 1, 1, 2, 1, 1])); //  2
console.log(findUniq([1, 1, 2, 1, 1])); //  2
console.log(findUniq([3, 10, 3, 3, 3])); //  10