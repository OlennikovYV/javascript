function nbDig(n, d) {
    let count = 0;

    for (let k = 0; k <= n; k++) {
        const square = k ** 2;
        count += Array
            .from(String(square), Number)
            .reduce((acc, el) => {
                if (el === d) acc += 1;
                return acc;
            }, 0);
    }

    return count;
}

console.log(nbDig(10, 1)); //   4
console.log(nbDig(5750, 0)); //   4700
console.log(nbDig(11011, 2)); //   9481
console.log(nbDig(12224, 8)); //   7733
console.log(nbDig(11549, 1)); //  11905