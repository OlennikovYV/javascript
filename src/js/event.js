function getNth(node, index) {
  if (node == null) throw 'error';

  return index == 0 ? node : getNth(node.next, index - 1);
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  const firstNode = new Node(data);
  firstNode.next = head;

  return firstNode;
}

function buildOneTwoThree() {
  var chained = null;

  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);

  return chained;
}

var list = buildOneTwoThree();

console.log(getNth(list, 0).data); // 1
console.log(getNth(list, 1).data); // 2
console.log(getNth(list, 2).data); // 3

try {
  getNth(list, 3);
} catch (err) {
  console.log('Invalid index value should throw error.');
}
try {
  getNth(list, 100);
} catch (err) {
  console.log('Invalid index value should throw error.');
}
try {
  getNth(null, 0);
} catch (err) {
  console.log('Null linked list should throw error.');
}
