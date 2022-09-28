function Node(data) {
  this.data = data;
  this.next = null;
}

function addNode(node, data) {
  const newNode = new Node(data);
  node.next = newNode;

  return newNode;
}

function buildOneTwoThree() {
  const node1 = new Node(1);
  const node2 = addNode(node1, 2);
  const node3 = addNode(node2, 3);

  return node1;
}

function length(head) {
  return head ? 1 + length(head.next) : 0;
}

function count(head, data) {
  if (!head) return 0;

  return (head.data === data ? 1 : 0) + count(head.next, data);
}

console.log(length(null), 0, 'Length of null list should be zero.');
console.log(
  length(new Node(99)),
  1,
  'Length of single node list should be one.'
);
console.log(
  length(buildOneTwoThree()),
  3,
  'Length of the three node list should be three.'
);

const list = buildOneTwoThree();
console.log(count(list, 1), 1, 'list should only contain one 1.');
console.log(count(list, 2), 1, 'list should only contain one 2.');
console.log(count(list, 3), 1, 'list should only contain one 3.');
console.log(
  count(list, 99),
  0,
  'list should return zero for integer not found in list.'
);
console.log(count(null, 1), 0, 'null list should always return count of zero.');
