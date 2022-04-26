function revrot(str, sz) {
    let result = [];
    const calculateSumCubes = arr => arr.reduce((acc, el) => acc + el ** 3, 0);
    const checkEven = num => num % 2 === 0;

    if (str === '' || sz === 0 || str.length < sz) return '';

    str = Array.from(str, Number);

    for (let i = 0; i < str.length; i += sz) {
        result.push(str.slice(i, i + sz));
    }

    if (result[result.length - 1].length < sz) {
        result.pop();
    }

    for (let i = 0; i < result.length; i++) {
        if (checkEven(calculateSumCubes(result[i]))) {
            result[i].reverse();
        } else {
            result[i].push(result[i].shift());
        }
        result[i] = result[i].join('');
    }

    return result.join('');
}

console.log(revrot("1234", 0)); //  "")
console.log(revrot("", 0)); //  "")
console.log(revrot("1234", 5)); // "")
console.table(revrot("733049910872815764", 5)); //  "330479108928157")
console.log(revrot("123456987654", 6)); //  "234561876549"
console.log(revrot("123456987653", 6)); //  "234561356789"
console.log(revrot("66443875", 4)); //  "44668753"
console.log(revrot("66443875", 8)); //  "64438756"
console.log(revrot("664438769", 8)); //  "67834466"
console.log(revrot("123456779", 8)); //  "23456771"
console.log(revrot("", 8)); //  ""
console.log(revrot("123456779", 0)); //  ""
console.log(revrot("563000655734469485", 4)); //  "0365065073456944"