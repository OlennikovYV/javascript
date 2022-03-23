function dontGiveMeFive(start, end) {
    let count = 0;

    for (let i = start; i <= end; i++)
        if (String(i).indexOf('5') === -1)
            count++;

    return count;
}

console.log(dontGiveMeFive(-9, 9)); //  17
console.log(dontGiveMeFive(-1, 9)); //  10
console.log(dontGiveMeFive(1, 9)); //  8
console.log(dontGiveMeFive(4, 17)); //  12
console.log(dontGiveMeFive(22, 47)); //  23
console.log(dontGiveMeFive(50, 100)); //  37