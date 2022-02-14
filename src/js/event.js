function longestConsec(strarr, k) {
    const n = strarr.length;
    let arrLengths = [],
        index,
        result = "";

    if (n == 0 || k > n || k <= 0) return "";

    for (let i = 0; i < n; i++) {
        if (i + k > n) break;
        arrLengths[i] = strarr.slice(i, i + k).reduce((acc, el) => {
            return acc + el.length;
        }, 0);
    }

    index = arrLengths.indexOf(Math.max(...arrLengths));

    return strarr.slice(index, index + k).join("");
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 2));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 3));