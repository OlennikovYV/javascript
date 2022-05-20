function findSum(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            result += i;
    }

    return result;
}

console.log(findSum(5)); //  8
console.log(findSum(10)); //  33