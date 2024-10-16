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
    const node = new Node(val);
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
  pop() {
    if (!this.head) {
      return undefined;
    }
    let cur = this.head;
    let prev = this.head;
    while (cur.next != null) {
      prev = cur;
      cur = cur.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let cur = this.head;
      this.head = cur.next;
      cur.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return cur;
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  getByValue(val) {
    let cur = this.head;
    while (cur) {
      if (cur.data === val) {
        return cur;
      }
      cur = cur.next;
    }
  }
  setByValue(index, value) {
    let cur = this.getByValue(index);
    cur.data = value;
  }
}
let linkedList = new LinkedList(1);
linkedList.push(3);
linkedList.push(5);
linkedList.push(1);
linkedList.push(7);
//console.log(linkedList.setByValue(5, 2));
linkedList.setByValue(5, 2);
console.log(linkedList.getByValue(3));
