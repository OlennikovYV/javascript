const Converter = {
  toAscii: function (hex) {
    return hex.replace(/../g, function (el) {
      return String.fromCharCode(parseInt(el, 16));
    });
  },
  toHex: function (ascii) {
    return ascii.replace(/./g, function (el) {
      return el.charCodeAt().toString(16);
    });
  },
};

str = 'Look mom, no hands';
hex = '4c6f6f6b206d6f6d2c206e6f2068616e6473';

console.log(Converter.toHex(str)); // '4c6f6f6b206d6f6d2c206e6f2068616e6473'
console.log(Converter.toAscii(hex)); // 'Look mom, no hands'

console.log(Converter.toHex(Converter.toAscii(hex))); // '4c6f6f6b206d6f6d2c206e6f2068616e6473'
console.log(Converter.toAscii(Converter.toHex(str))); // 'Look mom, no hands'
