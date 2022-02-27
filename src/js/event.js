decodeMorse = function(morseCode) {
    const morse = {
        'A': ['.-'],
        'B': ['-...'],
        'C': ['-.-.'],
        'D': ['-..'],
        'E': ['.'],
        'F': ['..-.'],
        'G': ['--.'],
        'H': ['....'],
        'I': ['..'],
        'J': ['.---'],
        'K': ['-.-'],
        'L': ['.-..'],
        'M': ['--'],
        'N': ['-.'],
        'O': ['---'],
        'P': ['.--.'],
        'Q': ['--.-'],
        'R': ['.-.'],
        'S': ['...'],
        'T': ['-'],
        'U': ['..-'],
        'V': ['...-'],
        'W': ['.--'],
        'X': ['-..-'],
        'Y': ['-.--'],
        'Z': ['--..'],
        '0': ['-----'],
        '1': ['.----'],
        '2': ['..---'],
        '3': ['...--'],
        '4': ['....-'],
        '5': ['.....'],
        '6': ['-....'],
        '7': ['--...'],
        '8': ['---..'],
        '9': ['----.'],
        'SOS': ['...---...'],
        '.': ['.-.-.-'],
        '!': ['-.-.--'],
    };

    function getChar(code) {
        let char = code;

        for (let key in morse) {
            if (morse[key] == code) char = key;
            // break;
        }

        return char;
    }

    function replaceAll3Space(str) {
        while (str.includes('   ')) {
            str = str.replace('   ', ' _ ')
        }

        return str;
    }

    morseCode = morseCode.trim();
    morseCode = replaceAll3Space(morseCode);

    return morseCode.split(' ').reduce((acc, el) => {
        if (el == '_') {
            acc.push(' ');
            return acc;
        }
        acc.push(getChar(el));
        return acc;
    }, []).join('');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); // 'HEY JUDE'