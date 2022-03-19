function getPlanetName(id) {
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune',
    }[id];
}

console.log(getPlanetName(2)); //  'Venus'
console.log(getPlanetName(5)); //  'Jupiter'
console.log(getPlanetName(3)); //  'Earth'
console.log(getPlanetName(8)); //  'Neptune'