function partlist(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i += 1) {
    const firstPart = arr.slice(0, i).join(' ');
    const secondPart = arr.slice(i).join(' ');

    result.push([firstPart, secondPart]);
  }
  return result;
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come'])); // [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG'])); //  [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]
console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ'])); //  [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]
