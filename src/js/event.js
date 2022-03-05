function toCamelCase(str) {
    return str.replace(/[_]/g, '-')
        .split('-')
        .map((el, index) => {
            if (index === 0) return el;
            return el[0].toUpperCase() + el.slice(1);
        })
        .join('');
}

console.log(toCamelCase('')); // ''
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"