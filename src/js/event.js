function dirReduc(arr) {
    const pairsOfDirections = {
        'NORTH': 'SOUTH',
        'EAST': 'WEST',
        'SOUTH': 'NORTH',
        'WEST': 'EAST',
    };

    let resultPath = [];

    arr.map(el => {
        if (resultPath.length)
            if (resultPath[resultPath.length - 1] == pairsOfDirections[el]) {
                resultPath.pop();
                return;
            }
        resultPath.push(el);
    });

    return resultPath;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []