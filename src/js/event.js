function maxLuckyNumber(nums) {
    const counts = {};
    const luckyArray = [];

    nums.forEach(el => counts[el] ? counts[el]++ : counts[el] = 1);

    for (let key in counts)
        if (Number(key) === counts[key]) luckyArray.push(counts[key]);

    return luckyArray.length ? Math.max(...luckyArray) : -1;
}

console.log(maxLuckyNumber([2, 2, 10, 6, 6, 6, 6, 6, 6])); //  6
console.log(maxLuckyNumber([1, 2, 3, 4, 5])); //  1
console.log(maxLuckyNumber([2, 4, 4, 5])); //  -1