class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;
  constructor(value: number) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root: Node | null;
  constructor() {
    this.root = null;
  }
  printNodes() {
    console.log(JSON.stringify(this.root, null, 4));
  }

  push(value: number) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          if (current.left) {
            current = current.left;
          } else {
            newNode.parent = current;
            current.left = newNode;
            return newNode;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            newNode.parent = current;
            current.right = newNode;
            return newNode;
          }
        }
      }
    }
  }
  searchNode(value: number) {
    if (this.root === null) {
      return null;
    }
    if (this.root.value === value) return this.root;
    let tmp = this.root;
    while (true) {
      if (tmp.value === value) {
        return tmp;
      }
      if (value > tmp.value) {
        tmp = tmp.right;
      } else {
        tmp = tmp.left;
      }
    }
  }
  _removeLeaf(node: Node, value: number) {
    if (value > node.value) {
      node.right = null;
    } else {
      node.left = null;
    }
  }
  _removeOne(node: Node, value: number) {
    let parent = node.parent;
    console.log(node.parent);
    if (value > parent.value) {
      parent.right = node.right;
    } else {
      parent.left = node.left;
    }
  }
  deleteNode(value: number) {
    let target = this.searchNode(value);
    if (target.left === null && target.right === null) {
      this._removeLeaf(target.parent, value);
    } else if (target.left === null && target.right) {
      this._removeOne(target, value);
    }
  }
}

const n1 = new Tree();
n1.push(8);
n1.push(2);
n1.push(4);
n1.push(10);
n1.push(5);
n1.push(11);
n1.searchNode(4);
n1.deleteNode(2);
console.log(n1.root);
export { };
