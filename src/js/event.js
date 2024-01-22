function countArara(n) {
  const result = [];

  if (n % 2 !== 0) {
    const allCount = (n + 1) / 2;
    result.push(' adak'.repeat(allCount - 1));
    result.push('anane');
  } else {
    result.push('adak '.repeat(n / 2));
  }

  return result.join(' ').trim();
}

console.log(countArara(1)); // 'anane'
console.log(countArara(3)); // 'adak anane'
console.log(countArara(8)); // 'adak adak adak adak'
