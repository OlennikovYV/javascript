function dataReverse(data) {
    const resultArray = [];

    for (let i = 0; i < data.length; i += 8) {
        resultArray.push(data.slice(i, i + 8));
    }

    return resultArray.reverse().reduce((acc, el) => acc.concat(el), []);
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]));
// 
console.log(dataReverse([1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));
// 
console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));
// 
console.log(dataReverse([0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]));
//