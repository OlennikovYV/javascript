function encrypt(text, n) {
    let odd = [],
        even = [],
        textEncrypt = '';

    if (!text || n < 1) return text;

    text
        .split('')
        .map((el, index) => {
            if (index % 2 === 0) {
                even.push(el);
            } else {
                odd.push(el);
            }
        });

    textEncrypt = odd.concat(even).join('');

    if (n > 1) textEncrypt = encrypt(textEncrypt, n - 1);

    return textEncrypt;
}

function decrypt(encryptedText, n) {
    let odd,
        even,
        centerString,
        textDecrypt = [];

    if (!encryptedText || n < 1) return encryptedText;

    centerString = Math.floor(encryptedText.length / 2);
    even = encryptedText.slice(0, centerString);
    odd = encryptedText.slice(centerString);

    for (let i = 0; i < odd.length; i++) {
        textDecrypt.push(odd[i]);
        if (even[i]) textDecrypt.push(even[i]);
    }
    textDecrypt = textDecrypt.join('');

    if (n > 1) textDecrypt = decrypt(textDecrypt, n - 1);

    return textDecrypt;
}

console.log(encrypt("This is a test!", 0)); //  "This is a test!"
console.log(encrypt("This is a test!", 1)); //  "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)); //  "s eT ashi tist!"
console.log(encrypt("This is a test!", 3)); //  " Tah itse sits!"
console.log(encrypt("This is a test!", 4)); //  "This is a test!"
console.log(encrypt("This is a test!", -1)); //  "This is a test!"
console.log(encrypt("This kata is very interesting!", 1)); //  "hskt svr neetn!Ti aai eyitrsig"

console.log(decrypt("This is a test!", 0)); //  "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)); //  "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)); //  "This is a test!"
console.log(decrypt(" Tah itse sits!", 3)); //  "This is a test!"
console.log(decrypt("This is a test!", 4)); //  "This is a test!"
console.log(decrypt("This is a test!", -1)); //  "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); //  "This kata is very interesting!"