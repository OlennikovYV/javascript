function rowSumOddNumbers(n) {
    function sumIntegers(row) {
        let sum = 0;
        for (let i = 1; i < row; i++) {
            sum += i;
        }
        return sum;
    }

    function computeFirstNumber(row) {
        return 2 * sumIntegers(row) + 1;
    }

    function sumNumbersRow(row) {
        let sum = number = computeFirstNumber(row);
        for (let i = 1; i < row; i++) {
            number += 2;
            sum = sum + number;
        }
        return sum;
    }

    if (n == 1) return 1;
    return sumNumbersRow(n);
}

console.log(rowSumOddNumbers(2)); //8
console.log(rowSumOddNumbers(3)); //27
console.log(rowSumOddNumbers(4)); //64
console.log(rowSumOddNumbers(5)); //125
console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(42)); //74088