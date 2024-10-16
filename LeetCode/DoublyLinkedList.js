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
  pop() {
    if (!this.head) {
      return undefined;
    }
    let cur = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    cur.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return true;
  }
}

let doubleLinkedList = new DoubleLinkedList(0);
doubleLinkedList.push(3);
doubleLinkedList.push(7);
doubleLinkedList.push(1);
console.log(doubleLinkedList.pop());
console.log(doubleLinkedList);
