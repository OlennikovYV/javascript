function changer(str) {
    const chars = 'abcdEefghIijklmnOopqrstUuvwxyzA';
    return str.replace(/[a-z]/g, ch => chars[chars.indexOf(ch) + 1]);
}

console.log(changer('Cat30')); //  'dbU30'
console.log(changer('Alice')); //  'bmjdf'
console.log(changer('sponge1')); //  'tqpOhf1'
console.log(changer('Hello World')); //  'Ifmmp xpsmE'
console.log(changer('dogs')); //  'Epht'
console.log(changer('z')); //  'A'