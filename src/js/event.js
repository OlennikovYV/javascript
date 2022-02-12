function countBy(x, n) {
    let z = [];
    let i = 1;

    while (z.length < n) {
        if (i % x == 0) {
            z.push(i);
        }
        i++;
    }

    return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));