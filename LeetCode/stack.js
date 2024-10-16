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
}

let stack = new Stack(0);
stack.push(10);
stack.push(15);
console.log(stack.pop());
console.log(stack);
