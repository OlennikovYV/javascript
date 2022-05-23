function rowWeights(array) {
    const result = [0, 0];
    const checkEven = num => num % 2 === 0;

    array.map((el, i) => {
        if (checkEven(i + 1)) {
            result[1] += el;
        } else {
            result[0] += el;
        }
    })

    return result;
}

console.log(rowWeights([80])); //  [80,0]
console.log(rowWeights([100, 50])); //  [100,50]
console.log(rowWeights([50, 60, 70, 80])); //  [120,140]
console.log(rowWeights([13, 27, 49])); //  [62,27]
console.log(rowWeights([70, 58, 75, 34, 91])); //  [236,92]
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96])); //  [211,164]
console.log(rowWeights([0])); //  [0,0]
console.log(rowWeights([100, 51, 50, 100])); //  [150,151]
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])); //  [207,235]
console.log(rowWeights([0, 1, 0])); //  [0,1]