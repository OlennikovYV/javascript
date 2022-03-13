function findMissingLetter(array) {
    let findChar = '';
    array.reduce((acc, el) => {
        if (el.charCodeAt(0) - acc.charCodeAt(0) > 1)
            findChar = String.fromCharCode(el.charCodeAt(0) - 1);
        return acc = el;
    });
    return findChar;
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'