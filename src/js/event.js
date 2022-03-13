function rgb(r, g, b) {
    function decToHex(num) {
        if (num > 255) num = 255;
        if (num < 0) num = 0;
        return num.toString(16).padStart(2, '0').toUpperCase();
    }
    return decToHex(r) + decToHex(g) + decToHex(b);
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'