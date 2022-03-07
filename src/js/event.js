function towerBuilder(nFloors) {
    let tower = [],
        towerWidth = 2 * nFloors - 1;

    for (let i = 1, j = towerWidth; i <= nFloors; i++) {
        const towerSpace = Math.floor((j - 1) / 2),
            floor = 'x'.repeat(towerSpace) +
            '*'.repeat(2 * i - 1) +
            'x'.repeat(towerSpace);
        tower.push(floor);
        j -= 2;
    }

    return tower;
}

console.log(towerBuilder(1)); // ["*"]);
console.log(towerBuilder(2)); // [" * ","***"]);
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(4)); // ["   *   ","  ***  "," ***** ","*******"]