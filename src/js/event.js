function compareVersions(version1, version2) {
  return version1.localeCompare(version2, undefined, { numeric: true }) >= 0;
}

console.log(compareVersions('11', '10')); // True
console.log(compareVersions('11', '11')); // True
console.log(compareVersions('10.4.6', '10.4')); // True
console.log(compareVersions('10.4', '11')); // False
console.log(compareVersions('10.4', '10.10')); // False
console.log(compareVersions('10.4.9', '10.5')); // False
console.log(compareVersions('10.4', '10.4.8')); // False
