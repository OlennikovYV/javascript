const splitInParts = function (s, partLength) {
  let regex = new RegExp(`.{1,${partLength}}`, 'g');
  return s.match(regex).join(' ');
};

console.log(splitInParts('supercalifragilisticexpialidocious', 3));
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
console.log(splitInParts('HelloKata', 1)); // 'H e l l o K a t a'
console.log(splitInParts('HelloKata', 9)); // 'HelloKata'
