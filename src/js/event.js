function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every(el => {
            return string.toLowerCase().indexOf(el) !== -1;
        });
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // True
console.log(isPangram('This is not a pangram.')); // False 
console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); // True