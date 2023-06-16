String.prototype.ipv4Address = function () {
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(this);
};

// 'Should return true'
console.log('127.0.0.1'.ipv4Address()); // True
console.log('0.0.0.0'.ipv4Address()); // True
console.log('255.255.255.255'.ipv4Address()); // True
console.log('10.20.30.40'.ipv4Address()); // True

// 'Should return false'
console.log(''.ipv4Address()); // False
console.log('10.256.30.40'.ipv4Address()); // False
console.log('10.20.030.40'.ipv4Address()); // False
console.log('127.0.1'.ipv4Address()); // False
console.log('127.0.0.0.1'.ipv4Address()); // False
console.log('..255.255'.ipv4Address()); // False
console.log('127.0.0.1\n'.ipv4Address()); // False
console.log('\n127.0.0.1'.ipv4Address()); // False
console.log(' 127.0.0.1'.ipv4Address()); // False
console.log('127.0.0.1 '.ipv4Address()); // False
console.log(' 127.0.0.1 '.ipv4Address()); // False
console.log('127.0.0.1.'.ipv4Address()); // False
console.log('.127.0.0.1'.ipv4Address()); // False
console.log('127..0.1'.ipv4Address()); // False
