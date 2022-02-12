function findEvenIndex(arr) {
    let left = 0;
    let right = arr.reduce((acc, el) => {
        return acc + el;
    }, 0);

    for (let i = 0; i < arr.length; i++) {
        if (i > 0) left += arr[i - 1];
        right -= arr[i];

        if (left == right) return i;
    }

    return -1;
}

console.log(findEvenIndex([]));
console.log(findEvenIndex([1]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 10]));