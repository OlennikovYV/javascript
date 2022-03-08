function comp(array1, array2) {
    let isEqual = true,
        sortArray = (a, b) => a - b;

    if (array1 === null || array2 === null) return false;
    // if (!array1.length || !array2.length) return false;
    // if (array1.length !== array2.length) return false;

    array1.sort(sortArray);
    array2.sort(sortArray);

    for (let i = 0; i < array1.length; i++) {
        if ((array1[i] ** 2) !== array2[i]) {
            isEqual = false;
            break;
        }
    }

    return isEqual;
}

let a1 = [
        121, 144, 19, 161, 19, 144, 19, 11
    ],
    a2 = [
        11 * 11, 121 * 121, 144 * 144, 19 * 19,
        161 * 161, 19 * 19, 144 * 144, 19 * 19
    ];
console.log(comp(a1, a2)); // true

a1 = [
    10, 3, 7, 5, 3, 6, 10, 10, 3, 5, 1
];
a2 = [
    25, 25, 9, 100, 9, 9, 100, 1, 36, 100, 49
];
console.log(comp(a1, a2)); // true