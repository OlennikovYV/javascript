function removeSmallest(numbers) {
    let minNumber, indexMinNumber;
    if (numbers.length === 0) return ([]);
    minNumber = Math.min(...numbers);
    indexMinNumber = numbers.findIndex(el => el === minNumber);
    return numbers.filter((el, i) => {
        return i !== indexMinNumber;
    });
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]
console.log(removeSmallest([])); // []