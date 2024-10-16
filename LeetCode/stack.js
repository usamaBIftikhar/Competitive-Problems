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
  pop() {
    if (!this.top) {
      return undefined;
    }
    let cur = this.top;
    this.top = this.top.next;
    cur.next = null;
    this.length--;
    if (this.length === 0) {
      this.top = null;
    }
    return cur;
  }
  min() {
    if (!this.top) {
      return undefined;
    }
    let cur = this.top;
    let min = cur.data;
    while (cur) {
      if (cur.data < min) {
        min = cur.data;
      }
      cur = cur.next;
    }
    return min;
  }
  top() {
    return this.top;
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}
