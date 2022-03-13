function findMissingLetter(array) {
    let findChar = array[0].charCodeAt(0);
    return String.fromCharCode(
        array.find(el => el.charCodeAt(0) !== findChar++).charCodeAt(0) - 1);
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'