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
  getByIndex(index) {
    let counter = 0;
    let cur = this.head;
    while (cur) {
      if (counter === index) {
        return cur;
      }
      counter++;
      cur = cur.next;
    }
  }
}
