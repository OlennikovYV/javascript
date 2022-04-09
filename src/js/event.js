function solution(string) {
    return string.match(/(^[a-z]+)|([A-Z]{1}[a-z]+)/g).join(' ');
}

console.log(solution('camelCasing')); //  'camel Casing'
console.log(solution('camelCasingTest')); //  'camel Casing Test'
console.log(solution('ZamelCasingTest')); //  'Zamel Casing Test'