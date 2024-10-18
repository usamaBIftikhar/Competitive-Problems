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
}
const tree = new BST();
tree.insert(8);
tree.insert(5);
tree.insert(12);
tree.insert(4);
tree.insert(10);
console.log(tree);
