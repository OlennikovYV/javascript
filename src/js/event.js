function countRepeatNumbers(arrayNumbers) {
    return arrayNumbers.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
}

function checkOdd(number) {
    return number % 2;
}

function findOdd(A) {
    let repeatNumbers = countRepeatNumbers(A);
    let number;

    for (let key in repeatNumbers) {
        if (checkOdd(repeatNumbers[key])) {
            number = +key;
            break;
        }
    };

    return number;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //-1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //5
console.log(findOdd([10])); //10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //1