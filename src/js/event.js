const Converter = {
  toAscii: function (hex) {
    return hex
      .match(/[\S]{2}/g)
      .map(el => String.fromCharCode(parseInt('0x' + el, 16)))
      .join('');
  },
  toHex: function (ascii) {
    return ascii
      .split('')
      .map(el => el.charCodeAt(0).toString(16))
      .join('');
  },
};

str = 'Look mom, no hands';
hex = '4c6f6f6b206d6f6d2c206e6f2068616e6473';

console.log(Converter.toHex(str)); // '4c6f6f6b206d6f6d2c206e6f2068616e6473'
console.log(Converter.toAscii(hex)); // 'Look mom, no hands'

console.log(Converter.toHex(Converter.toAscii(hex))); // '4c6f6f6b206d6f6d2c206e6f2068616e6473'
console.log(Converter.toAscii(Converter.toHex(str))); // 'Look mom, no hands'
