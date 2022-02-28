function XO(str) {
    function calcCountChar(string, char) {
        const regExp = new RegExp(char, `gi`);
        return (string.match(regExp) || []).length;
    }
    return calcCountChar(str, 'x') === calcCountChar(str, 'o');
}

console.log(XO('xo')); //true
console.log(XO("xxOo")); //true
console.log(XO("xxxm")); //false
console.log(XO("Oo")); //false
console.log(XO("ooom")); //false