function sortTheInnerContent(words) {
  const sortInnerChars = str => {
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    let innerChars = str.slice(1, str.length - 1);

    innerChars = innerChars
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join('');

    return str.length > 2 ? firstChar + innerChars + lastChar : str;
  };

  return words
    .split(' ')
    .map(word => sortInnerChars(word))
    .join(' ');
}

console.log(sortTheInnerContent('sort the inner content in descending order'));
// 'srot the inner ctonnet in dsnnieedcg oredr'
console.log(sortTheInnerContent('wait for me'));
// 'wiat for me');
console.log(sortTheInnerContent('this kata is easy'));
// 'tihs ktaa is esay'
console.log(sortTheInnerContent('wccuvg ds s kkbzuhz yyccdkxcpx'));
// 'wvuccg ds s kzukhbz yyxpkdcccx'
