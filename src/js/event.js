function twoSort(s) {
    return s
        .sort()[0]
        .split('')
        .map((el, i, arr) => arr.length - 1 !== i ? el + '***' : el)
        .join('');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); //  'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); //  'a***r***e'