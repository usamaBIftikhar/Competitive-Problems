class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.tail = node;
      this.head = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
}
