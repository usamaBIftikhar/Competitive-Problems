class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return this;
  }
}

let doubleLinkedList = new DoubleLinkedList(0);
doubleLinkedList.push(3);
doubleLinkedList.push(7);
doubleLinkedList.push(1);
console.log(doubleLinkedList);
