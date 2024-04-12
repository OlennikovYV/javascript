function compareVersions(version1, version2) {
  const arrVer1 = version1.split('.');
  const arrVer2 = version2.split('.');
  const minLength = Math.max(arrVer1.length, arrVer2.length);

  for (let i = 0; i < minLength; i++) {
    const minorVer1 = Number(arrVer1[i]) || 0;
    const minorVer2 = Number(arrVer2[i]) || 0;

    if (minorVer1 === minorVer2) continue;

    return minorVer1 > minorVer2 ? true : false;
  }

  return true;
}

console.log(compareVersions('11', '10')); // True
console.log(compareVersions('11', '11')); // True
console.log(compareVersions('10.4.6', '10.4')); // True
console.log(compareVersions('10.4', '11')); // False
console.log(compareVersions('10.4', '10.10')); // False
console.log(compareVersions('10.4.9', '10.5')); // False
console.log(compareVersions('10.4', '10.4.8')); // False
