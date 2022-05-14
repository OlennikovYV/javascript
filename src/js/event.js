function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let result = Array.from(arguments);
    result = result.map(age => age * age);
    result = result.reduce((sum, age) => sum + age);
    result = Math.sqrt(result);
    result = result / 2;

    return Math.floor(result);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); // 86