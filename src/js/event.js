function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function push(head, data) {
  let firstNode;

  firstNode = new Node(data);
  firstNode.next = head;

  return firstNode;
}

function listFromArray(arr) {
  var chained = null;

  if (!arr && Array.isArray(arr)) return null;

  for (let i = 0; i < arr.length; i += 1) {
    chained = push(chained, arr[i]);
  }

  return chained;
}

function length(head) {
  let lengthLink = 1;
  let currentLink = head;

  if (!currentLink && !currentLink?.hasOwnProperty(currentLink.data)) return 0;

  while (currentLink.next) {
    lengthLink += 1;
    currentLink = currentLink.next;
  }

  return lengthLink;
}

console.log(length(null)); // 0
console.log(length(listFromArray([1, 2, 3, 4]))); // 4
