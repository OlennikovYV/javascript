var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, el) => el ? acc + el : acc, 0);
}

console.log(countSheeps(array1)); // 17