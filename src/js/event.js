function rot13(message) {
    let decode = '';

    for (let i = 0; i < message.length; i++) {
        let char = message.charCodeAt(i);

        if (char >= 65 && char <= 90) {
            if (char + 13 > 90) {
                char -= 77;
                decode += String.fromCodePoint(char + 64);
            } else
                decode += String.fromCodePoint(char + 13);
            continue;
        }

        if (char >= 97 && char <= 122) {
            if (char + 13 > 122) {
                char -= 109;
                decode += String.fromCodePoint(char + 96);
            } else
                decode += String.fromCodePoint(char + 13);
            continue;
        }

        decode += String.fromCodePoint(char);
    }

    return decode;

}

console.log(rot13('grfg'));
console.log(rot13('Grfg'));
console.log(rot13('Zax'));