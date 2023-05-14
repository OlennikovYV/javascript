function spongeMeme(sentence) {
  return sentence.replace(/./g, (alpha, i) =>
    i % 2 ? alpha.toLowerCase() : alpha.toUpperCase()
  );
}

console.log(spongeMeme('stop Making spongebob Memes!'));
// 'StOp mAkInG SpOnGeBoB MeMeS!'
