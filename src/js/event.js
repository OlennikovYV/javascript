function findUniq(arr) {
    let result = arr;
    result = result.sort((a, b) => a - b);

    return result[0] !== result[1] ?
        result[0] :
        result[result.length - 1];
}

console.log(findUniq([0.55, 0, 0])); //  0.55
console.log(findUniq([1, 0, 0])); //  1
console.log(findUniq([0, 1, 0])); //  1
console.log(findUniq([0, 0, 1])); //  1
console.log(findUniq([1, 1, 1, 2, 1, 1])); //  2
console.log(findUniq([1, 1, 2, 1, 1])); //  2
console.log(findUniq([3, 10, 3, 3, 3])); //  10