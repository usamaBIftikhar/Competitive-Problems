class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor(val) {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let cur = this.root;
    while (true) {
      if (node.data === cur.data) {
        return undefined;
      }
      if (node.data > cur.data) {
        if (cur.right == null) {
          cur.right = node;
          return this;
        }
        cur = cur.right;
      } else {
        if (cur.left == null) {
          cur.left = node;
          return this;
        }
        cur = cur.left;
      }
    }
  }
  includes(val) {
    if (!this.root) return undefined;
    let cur = this.root;
    while (cur) {
      if (cur.data == val) return cur;
      if (val < cur.data) cur = cur.left;
      else cur = cur.right;
    }
    return undefined;
  }
  bsf() {
    let cur = this.root;
    let data = [];
    let queue = [];
    queue.push(cur);
    while (queue.length) {
      cur = queue.shift();
      data.push(cur.data);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    return data;
  }
  dfsPreOrder(node = this.root, data = []) {
    if (!node) return data;
    data.push(node.data);
    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }
}
const tree = new BST();
tree.insert(8);
tree.insert(5);
tree.insert(12);
tree.insert(4);
tree.insert(10);
console.log(tree.dfsPreOrder());
