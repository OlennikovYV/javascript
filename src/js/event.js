// return masked string
function duplicateEncode(word) {
    return word
        .split('')
        .map((el, index, array) => {
            return (word.indexOf(el) != word.lastIndexOf(el) ? ')' : '(');
        })
        .join('');
}

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())","should ignore case"
console.log(duplicateEncode("(( @")); //"))(("