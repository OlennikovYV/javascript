function passHash(str) {
  return MD5.generate(str);
}

console.log(passHash('password')); // '5f4dcc3b5aa765d61d8327deb882cf99'
console.log(passHash('abc123')); // 'e99a18c428cb38d5f260853678922e03'
