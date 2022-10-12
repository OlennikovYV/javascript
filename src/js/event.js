function int32ToIp(int32) {
  return [24, 16, 8, 0].map(octet => (int32 >> octet) & 255).join`.`;
}

console.log(int32ToIp(2154959208)); // '128.114.17.104'
console.log(int32ToIp(0)); // '0.0.0.0'
console.log(int32ToIp(2149583361)); // '128.32.10.1'
console.log(int32ToIp(2 ** 32 - 1)); // '255.255.255.255'
