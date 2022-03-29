/*
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
 */
const code = ['a', 'e', 'i', 'o', 'u'];

function encode(string) {
    return string.replace(/[aeiou]/g, el => '_aeiou'.indexOf(el));
}

function decode(string) {
    // return string.replace(/[1-5]/g, el => [...'_aeiou'][el])
    return string.replace(/[1-5]/g, el => '_aeiou'.charAt(el))
}

console.log(encode('hello')); //  'h2ll4'
console.log(encode('How are you today?')); //  'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.')); //  'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4')); //  'hello'