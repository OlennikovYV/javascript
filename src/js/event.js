function nextBigger(n) {
    const combination = [];
    let nextBigger = Number.MAX_VALUE;

    function getCombination(array, memo) {
        let currentElement;

        memo = memo || [];

        for (let i = 0; i < array.length; i++) {
            currentElement = array.splice(i, 1);

            if (array.length === 0) {
                let digit = +memo.concat(currentElement).join('');
                if (digit > n && digit < nextBigger) {
                    nextBigger = digit;
                    if (combination.length > 0)
                        combination.pop();
                    combination.push(digit);
                }
            }

            getCombination(array.slice(), memo.concat(currentElement));
            array.splice(i, 0, currentElement[0]);
        }

        return combination;
    }

    getCombination(Array.from(String(n), Number));

    return combination.length > 0 ? combination[0] : -1;
}

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414
console.log(nextBigger(321)); // -1
console.log(nextBigger(1234567890)); //1234567908