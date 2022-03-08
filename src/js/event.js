function comp(array1, array2) {
    let sortArray = (a, b) => a - b;

    return !!array1 && !!array2 &&
        array1.map(el => el * el).sort(sortArray).toString() ===
        array2.sort(sortArray).toString();
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