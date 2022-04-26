function revrot(str, sz) {
    const calculateSumCubes = array => {
        return array
            .split('')
            .reduce((acc, el) => acc + (+el) ** 3, 0);
    }
    const checkEven = num => num % 2 === 0;
    const reverseStr = str => str.split('').reverse().join('');
    const rotateStr = str => str.slice(1) + str.slice(0, 1);

    if (sz < 1 || str.length < sz) return '';

    return str
        .match(new RegExp('\\d{' + sz + '}', 'g'))
        .map(el => checkEven(calculateSumCubes(el)) ? reverseStr(el) : rotateStr(el))
        .join('');
}

console.log(revrot("1234", 0)); //  "")
console.log(revrot("", 0)); //  "")
console.log(revrot("1234", 5)); // "")
console.log(revrot("733049910872815764", 5)); //  "330479108928157")
console.log(revrot("123456987654", 6)); //  "234561876549"
console.log(revrot("123456987653", 6)); //  "234561356789"
console.log(revrot("66443875", 4)); //  "44668753"
console.log(revrot("66443875", 8)); //  "64438756"
console.log(revrot("664438769", 8)); //  "67834466"
console.log(revrot("123456779", 8)); //  "23456771"
console.log(revrot("", 8)); //  ""
console.log(revrot("123456779", 0)); //  ""
console.log(revrot("563000655734469485", 4)); //  "0365065073456944"