var humanYearsCatYearsDogYears = function(humanYears) {
    const calcYearsAnimal = (yearsHuman, animal) => {
        if (yearsHuman < 1) return 0;
        if (yearsHuman === 1) return 15;
        if (yearsHuman === 2) return 24;

        return 24 + (yearsHuman - 2) * (animal === 'cat' ? 4 : 5);
    }


    return [
        humanYears,
        calcYearsAnimal(humanYears, 'cat'),
        calcYearsAnimal(humanYears, 'dog'),
    ];
}

console.log(humanYearsCatYearsDogYears(1)); //  [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); //  [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); //  [10,56,64]