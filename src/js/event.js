function towerBuilder(nFloors) {
    return Array.from({ length: nFloors }, (v, k) => {
        const towerSpace = ' '.repeat(nFloors - k - 1);
        return `${towerSpace}${'*'.repeat(k + k +1)}${towerSpace}`;
    });
}

console.log(towerBuilder(1)); // ["*"]);
console.log(towerBuilder(2)); // [" * ","***"]);
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(4)); // ["   *   ","  ***  "," ***** ","*******"]