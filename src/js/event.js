function nerdify(txt) {
  const replace = {
    a: '4',
    e: '3',
    l: '1',
  };

  return txt.replace(/[AEael]/g, alpha => replace[alpha.toLowerCase()]);
}

console.log(nerdify('Fund4m3nt41s')); // 'Fund4m3nt41s'
console.log(nerdify('Seven')); // 'S3v3n'
console.log(nerdify('Los Angeles')); // 'Los 4ng313s'
console.log(nerdify('Seoijselawuue')); // 'S3oijs314wuu3'
