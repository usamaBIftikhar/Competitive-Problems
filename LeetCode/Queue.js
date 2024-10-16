class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
class Queue {
  constructor(val) {
    this.front = new Node(val);
    this.rear = this.front;
    this.length = 1;
  }
  enqueue(val) {
    const node = new Node(val);
    if (!this.front) {
      this.front = node;
      this.read = node;
      return this;
    }
    this.rear.next = node;
    this.rear = node;
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.front) {
      return undefined;
    }
    let cur = this.front;
    this.front = cur.next;
    cur.next = null;
    this.length--;
    if (this.length === 0) {
      this.front = null;
      this.rear = null;
    }
    return cur;
  }
  min() {
    if (!this.front) {
      return undefined;
    }
    let cur = this.front;
    let min = cur.data;
    while (cur.next) {
      if (cur.data < min) {
        min = cur.data;
      }
      cur = cur.next;
    }
    return min;
  }
}

let queue = new Queue(2);
queue.enqueue(1);
queue.enqueue(6);
console.log(queue.min());
