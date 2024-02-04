String.prototype.isAudio = function () {
  return /^([a-z|A-Z]+)\.(mp3|flac|al?ac)/g.test(this);
};
String.prototype.isImage = function () {
  return /^([a-z|A-Z]+)\.(jpe?g|png|bmp|gif)/g.test(this);
};

console.log('Nothing Else Matters.mp3'.isAudio()); // false
console.log('NothingElseMatters.mp3'.isAudio()); // true
console.log('DaftPunk.FLAC'.isAudio()); // false
console.log('DaftPunk.flac'.isAudio()); // true
console.log('AmonTobin.aac'.isAudio()); // true
console.log(' Amon Tobin.alac'.isAudio()); // false
console.log('tobin.alac'.isAudio()); // true
console.log('Home.jpg'.isImage()); // true
console.log('flat.jpeg'.isImage()); // true
console.log('icon.bmp'.isImage()); // true
console.log('icon2.jpg'.isImage()); // false
console.log('bounce.gif'.isImage()); // true
console.log('animate bounce.GIF'.isImage()); // false
console.log('transparency.png'.isImage()); // true
