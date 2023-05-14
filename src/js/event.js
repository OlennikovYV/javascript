function spongeMeme(sentence) {
  return sentence
    .split('')
    .map((alpha, i) =>
      i % 2 === 0 ? alpha.toUpperCase() : alpha.toLowerCase()
    )
    .join('');
}

console.log(spongeMeme('stop Making spongebob Memes!'));
// 'StOp mAkInG SpOnGeBoB MeMeS!'
