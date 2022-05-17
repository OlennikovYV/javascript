function vertMirror(strng) {
    const result = strng.split('\n');

    return result
        .map(line => line
            .split('')
            .reverse()
            .join(''))
        .join('\n');
}

function horMirror(strng) {
    const result = strng.split('\n');

    return result
        .reverse()
        .join('\n');
}

function oper(fct, s) {
    return fct(s);
}

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")); //  "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")); //  "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")); //  "yeCt\nCSbg\nJVhv\nlVHt"
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")); //  "cEYz\nLPKo\ndbrZ\nnjMK"