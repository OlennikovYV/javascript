function ipToInt32(ip) {
  return parseInt(
    ip
      .split('.')
      .map(num => Number(num).toString(2).padStart(8, '0'))
      .join(''),
    2
  );
}

console.log(ipToInt32('128.32.10.1')); // 2149583361
