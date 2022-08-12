function ipToInt32(ip) {
  return ip
    .split('.')
    .reduce((decimal, octet) => decimal * 256 + Number(octet));
}

console.log(ipToInt32('128.32.10.1')); // 2149583361
