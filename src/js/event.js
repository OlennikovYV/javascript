function shortcut(string) {
    return string
        .split('')
        .filter(el => !['a', 'e', 'i', 'o', 'u'].includes(el))
        .join('');
}

console.log(shortcut('hello')); //  'hll'
console.log(shortcut('how are you today?')); //  'hw r y tdy?'
console.log(shortcut('complain')); //  'cmpln'
console.log(shortcut('never')); //  'nvr'