var uniqueInOrder = function(iterable) {
    return [...iterable].filter((el, index) => {
        return el != iterable[index - 1];
    });
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]