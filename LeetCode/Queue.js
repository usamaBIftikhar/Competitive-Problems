class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class Queue {
  constructor(val) {
    this.front = new Node(val);
    this.rear = front;
    this.length = 1;
  }
}
