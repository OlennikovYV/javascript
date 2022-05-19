function hoopCount(n) {
    const HOOPS_LIMIT = 10;
    return n < HOOPS_LIMIT ?
        'Keep at it until you get it' :
        'Great, now move on to tricks';
}

console.log(hoopCount(3)); // "Keep at it until you get it"
console.log(hoopCount(11)); // "Great, now move on to tricks"