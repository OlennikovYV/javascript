// return masked string
function maskify(cc) {
    let countCharMask = cc.length - 4;
    if (countCharMask < 1) return cc;
    return '#'.repeat(countCharMask) + cc.slice(-4);
}

console.log(maskify('4556364607935616')); // '############5616'
console.log(maskify('1')); // '1'
console.log(maskify('11111')); // '#1111'
console.log(maskify('4567')); // '4567'
console.log(maskify('1234567890')); // '######7890'