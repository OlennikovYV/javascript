function pipeFix(numbers) {
    const result = [];

    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++)
        result.push(i);

    return result;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // [1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1, 2, 3, 12])); // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6, 9])); // [6,7,8,9]
console.log(pipeFix([-1, 4])); // [-1,0,1,2,3,4]
console.log(pipeFix([1, 2, 3])); // [1,2,3]