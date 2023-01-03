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

console.log(push(null, 1).data); // 1
console.log(push(null, 1).next); // null
console.log(push(new Node(1), 2).data); // 2
console.log(push(new Node(1), 2).next.data); // 1

console.log(buildOneTwoThree().data); // 1
console.log(buildOneTwoThree().next.data); // 2
console.log(buildOneTwoThree().next.next.data); // 3
console.log(buildOneTwoThree().next.next.next); // null
