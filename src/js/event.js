function dirReduc(arr) {
    let pairsOfDirections = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;

    arr = arr.join('');

    while (pairsOfDirections.test(arr)) {
        arr = arr.replace(pairsOfDirections, '');
    }

    return arr.match(/NORTH|SOUTH|EAST|WEST/g) || [];
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []