function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // True
console.log(isPangram('This is not a pangram.')); // False 
console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); // True