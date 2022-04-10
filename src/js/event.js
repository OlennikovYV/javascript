function changer(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .toLowerCase()
        .split('')
        .map(el => {
            if (/[a-z]/.test(el)) {
                let codeChar;
                if (el === 'z') return 'A';

                codeChar = String.fromCharCode(el.codePointAt(0) + 1);

                if (vowels.indexOf(codeChar) !== -1) {
                    return codeChar.toUpperCase();
                }

                return codeChar;
            }
            return el;
        })
        .join('');
}

console.log(changer('Cat30')); //  'dbU30'
console.log(changer('Alice')); //  'bmjdf'
console.log(changer('sponge1')); //  'tqpOhf1'
console.log(changer('Hello World')); //  'Ifmmp xpsmE'
console.log(changer('dogs')); //  'Epht'
console.log(changer('z')); //  'A'