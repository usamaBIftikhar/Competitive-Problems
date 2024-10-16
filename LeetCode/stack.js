class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class Stack {
  constructor(val) {
    this.top = new Node(val);
    this.length = 1;
  }
  push(val) {
    const node = new Node(val);
    if (!this.top) {
      this.top = node;
    }
    node.next = this.top;
    this.top = node;
    this.length++;
    return this;
  }
}
