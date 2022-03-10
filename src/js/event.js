function smallest(n) {
    const strNumber = String(n);
    let arrIndexes = [],
        arrNumbers = [],
        minNumber,
        minIndex;

    function findMininumNumber(index, number) {
        let cutNumber,
            glueNumber,
            arrGlueNumbers = [];

        cutNumber = number.slice(index, index + 1);
        glueNumber = number.slice(0, index) +
            number.slice(index + 1);

        for (let i = 0; i < number.length; i++) {
            let start, end, result;

            start = glueNumber.slice(0, i);
            end = glueNumber.slice(i);

            result = start + cutNumber + end;
            // console.log(result);
            arrGlueNumbers.push(+result);
        }

        arrNumbers[index] = Math.min(...arrGlueNumbers);
        arrIndexes[index] = arrGlueNumbers.indexOf(arrNumbers[index]);
    }

    for (let i = 0; i < strNumber.length; i++) {
        findMininumNumber(i, strNumber);
    }

    minNumber = Math.min(...arrNumbers);
    minIndex = arrNumbers.indexOf(minNumber);

    return [arrNumbers[minIndex], minIndex, arrIndexes[minIndex]];
}

console.log(smallest(261235)); // [126235, 2, 0]
console.log(smallest(209917)); // [29917, 0, 1]
console.log(smallest(285365)); // [238565, 3, 1]
console.log(smallest(269045)); // [26945, 3, 0]
console.log(smallest(296837)); // [239687, 4, 1]