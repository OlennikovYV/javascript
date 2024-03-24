function ipToNum(ip) {
  return ip.split('.').reduce(function (int, value) {
    return int * 256 + +value;
  });
}

function numToIp(num) {
  const part1 = num & 255;
  const part2 = (num >> 8) & 255;
  const part3 = (num >> 16) & 255;
  const part4 = (num >> 24) & 255;

  return part4 + '.' + part3 + '.' + part2 + '.' + part1;
}

// 'ipToNum'
console.log(ipToNum('192.168.1.1')); // 3232235777
console.log(ipToNum('10.0.0.0')); // 167772160
console.log(ipToNum('176.16.0.1')); // 2953838593
// 'numToIp'
console.log(numToIp(3232235777)); // '192.168.1.1'
console.log(numToIp(167772160)); // '10.0.0.0'
console.log(numToIp(2953838593)); // '176.16.0.1'
// 'Combined'
console.log(numToIp(ipToNum('192.168.1.1'))); // '192.168.1.1'
console.log(numToIp(ipToNum('10.0.0.0'))); // '10.0.0.0'
console.log(numToIp(ipToNum('176.16.0.1'))); // '176.16.0.1'
console.log(ipToNum(numToIp(3232235777))); // 3232235777
console.log(ipToNum(numToIp(167772160))); // 167772160
console.log(ipToNum(numToIp(2953838593))); // 2953838593
