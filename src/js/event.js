const quarterOf = (month) => {
    return Math.ceil(month / 3);
}

console.log(quarterOf(3)); //  1
console.log(quarterOf(8)); //  3
console.log(quarterOf(11)); //  4