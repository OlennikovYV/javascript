function reverseAndMirror(s1, s2) {
  const toggleCharCase = char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  const toggleStringCase = string =>
    string
      .split('')
      .map(char => toggleCharCase(char))
      .join('');
  const reverseString = string => [...string].reverse().join('');

  const string1 = reverseString(toggleStringCase(s2));
  const string2 = reverseString(toggleStringCase(s1)) + toggleStringCase(s1);

  return `${string1}@@@${string2}`;
}

let s1 = 'FizZ';
let s2 = 'buZZ';
console.log(reverseAndMirror(s1, s2));
// "zzUB@@@zZIffIZz"

s1 = 'String Reversing';
s2 = 'Changing Case';
console.log(reverseAndMirror(s1, s2));
// "ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"
