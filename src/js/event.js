// return masked string
function duplicateEncode(word) {
    const arrChar = word
        .toLowerCase()
        .split('');
    const countChar = calcChar(arrChar);

    function calcChar(str) {
        return str
            .reduce((acc, el) => {
                acc[el] = (acc[el] || 0) + 1;
                return acc;
            }, {});
    }

    return arrChar
        .reduce((acc, el) => {
            acc.push((countChar[el] > 1 ? ')' : '('));
            return acc;
        }, [])
        .join('');
}

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())","should ignore case"
console.log(duplicateEncode("(( @")); //"))(("