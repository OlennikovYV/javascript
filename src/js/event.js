function findSum(n) {
    return Array.from(Array(n), (el, i) => ++i)
        .reduce((sum, el) => {
            if (el % 3 === 0 || el % 5 === 0)
                return sum + el;

            return sum;
        }, 0);
}

console.log(findSum(5)); //  8
console.log(findSum(10)); //  33