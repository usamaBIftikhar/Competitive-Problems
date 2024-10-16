class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class Stack {
  constructor(val) {
    this.first = new Node(val);
    this.length = 1;
  }
}
