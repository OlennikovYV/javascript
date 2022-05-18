function alphabetWar(fight) {
    const scores = {
        'w': -4,
        'p': -3,
        'b': -2,
        's': -1,
        'z': 1,
        'd': 2,
        'q': 3,
        'm': 4,
    };
    let result = 0;

    fight
        .split('')
        .map(alpha => {
            result += (scores[alpha] || 0);
        })

    return result ?
        `${result < 0 ? 'Left' : 'Right'} side win!` :
        `Let's fight again!`
}

console.log(alphabetWar("z")); //  "Right side wins!"
console.log(alphabetWar("zdqmwpbs")); //  "Let's fight again!"
console.log(alphabetWar("zzzzs")); //  "Right side wins!"
console.log(alphabetWar("wwwwww")); //  "Left side wins!"